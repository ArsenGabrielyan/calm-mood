import { BreathingExerciseType, BreathingPatternId } from "@/lib/types"
import { useForm, Controller } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { getBreathingExerciseSchema } from "@/lib/schemas"
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSeparator, FieldSet, FieldTitle } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button"
import { useMemo } from "react"
import { BREATHING_PATTERNS } from "@/lib/constants/maps";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { PRESETS } from "@/lib/constants";
import { useTranslations } from "next-intl";

interface Props{
     onSubmit: (values: BreathingExerciseType) => void,
     setOpen: (open: boolean) => void,
     defaultValue: {
          time: number,
          pattern: BreathingPatternId
     },
}

export default function ExerciseSettings({onSubmit, setOpen, defaultValue}: Props){
     const validationText = useTranslations("settings.validations")
     const form = useForm<BreathingExerciseType>({
          resolver: zodResolver(getBreathingExerciseSchema(validationText)),
          defaultValues: {
               exerciseTime: Math.round(defaultValue.time).toString(),
               pattern: defaultValue.pattern
          }
     })
     const cycleMs = Number(form.watch("exerciseTime")) * 1000;
     const holdTime = useMemo(()=>cycleMs/5, [cycleMs]);
     const growTime = holdTime * 2;
     const t = useTranslations("settings");
     const patternTxt = useTranslations("breathingExercise.patterns")
     return (
          <form onSubmit={form.handleSubmit(onSubmit)}>
               <FieldSet>
                    <FieldGroup className="gap-4">
                         <Field orientation="responsive">
                              <FieldContent>
                                   <FieldLabel htmlFor="exercise-time">{t("breathing-exercise.time")}</FieldLabel>
                                   <FieldDescription>
                                        <ul>
                                             <li>{t("breathing-exercise.hold",{hold: (holdTime/1000).toString()})}</li>
                                             <li>{t("breathing-exercise.breathe",{breatheTime: (growTime/1000).toString()})}</li>
                                        </ul>
                                   </FieldDescription>
                              </FieldContent>
                              <Controller
                                   control={form.control}
                                   name="exerciseTime"
                                   render={({field, fieldState})=>(
                                        <Field>
                                             <FieldLabel>{t("breathing-exercise.duration")}</FieldLabel>
                                             <Input {...field} id="exercise-time" type="number" aria-invalid={fieldState.invalid} min={12} max={300}/>
                                             {fieldState.invalid && (
                                                  <FieldError errors={[fieldState.error]} />
                                             )}
                                        </Field>
                                   )}
                              />
                         </Field>
                         <Field>
                              <FieldLabel>{t("breathing-exercise.presets")}</FieldLabel>
                              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                                   {PRESETS.map(({id, Icon, seconds})=>(
                                        <Button variant={Number(form.watch("exerciseTime"))===seconds ? "default" : "outline"} key={id} onClick={()=>form.setValue("exerciseTime",seconds.toString())} type="button">
                                             <Icon className="size-5" />
                                             {t("breathing-exercise.seconds",{seconds: seconds.toString()})}
                                        </Button>
                                   ))}
                              </div>
                         </Field>
                         <FieldSeparator/>
                         <Field>
                              <FieldLabel>{t("breathing-exercise.type")}</FieldLabel>
                              <Controller
                                   control={form.control}
                                   name="pattern"
                                   render={({field, fieldState})=>(
                                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                                             {Object.keys(BREATHING_PATTERNS).map(id=>(
                                                  <FieldLabel key={id} htmlFor={id}>
                                                       <Field orientation="horizontal">
                                                            <FieldContent>
                                                                 <FieldTitle>{patternTxt(id as BreathingPatternId)}</FieldTitle>
                                                            </FieldContent>
                                                            <RadioGroupItem value={id} id={id} aria-invalid={fieldState.invalid}/>
                                                       </Field>
                                                  </FieldLabel>
                                             ))}
                                             {fieldState.invalid && (
                                                  <FieldError errors={[fieldState.error]} />
                                             )}
                                        </RadioGroup>
                                   )}
                              />
                         </Field>
                    </FieldGroup>
                    <Field orientation="horizontal">
                         <Button type="submit">{t("buttons.apply")}</Button>
                         <Button variant="outline" type="button" onClick={()=>{
                              form.reset();
                              setOpen(false);
                         }}>
                              {t("buttons.cancel")}
                         </Button>
                    </Field>
               </FieldSet>
          </form>
     )
}