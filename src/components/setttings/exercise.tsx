import { BreathingExerciseType, BreathingPatternId } from "@/lib/types"
import { useForm, Controller } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { BreathingExerciseSchema } from "@/lib/schemas"
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSeparator, FieldSet, FieldTitle } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button"
import { useMemo } from "react"
import { BREATHING_PATTERNS } from "@/lib/constants/maps";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { PRESETS } from "@/lib/constants";

interface Props{
     onSubmit: (values: BreathingExerciseType) => void,
     setOpen: (open: boolean) => void,
     defaultValue: {
          time: number,
          pattern: BreathingPatternId
     },
}

export default function ExerciseSettings({onSubmit, setOpen, defaultValue}: Props){
     const form = useForm<BreathingExerciseType>({
          resolver: zodResolver(BreathingExerciseSchema),
          defaultValues: {
               exerciseTime: Math.round(defaultValue.time).toString(),
               pattern: defaultValue.pattern
          }
     })
     const cycleMs = Number(form.watch("exerciseTime")) * 1000;
     const holdTime = useMemo(()=>cycleMs/5, [cycleMs]);
     const growTime = holdTime * 2;
     return (
          <form onSubmit={form.handleSubmit(onSubmit)}>
               <FieldSet>
                    <FieldGroup className="gap-4">
                         <Field orientation="responsive">
                              <FieldContent>
                                   <FieldLabel htmlFor="exercise-time">Ժամանակահատված</FieldLabel>
                                   <FieldDescription>
                                        <ul>
                                             <li>Պահում՝ {holdTime/1000} վրկ</li>
                                             <li>Շունչ / Արտաշունչ՝ {growTime/1000} վրկ</li>
                                        </ul>
                                   </FieldDescription>
                              </FieldContent>
                              <Controller
                                   control={form.control}
                                   name="exerciseTime"
                                   render={({field, fieldState})=>(
                                        <Field>
                                             <FieldLabel>Ցիկլի տևողություն</FieldLabel>
                                             <Input {...field} id="exercise-time" type="number" aria-invalid={fieldState.invalid} min={12} max={300}/>
                                             {fieldState.invalid && (
                                                  <FieldError errors={[fieldState.error]} />
                                             )}
                                        </Field>
                                   )}
                              />
                         </Field>
                         <Field>
                              <FieldLabel>Նախադրված Կարգավորումներ</FieldLabel>
                              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                                   {PRESETS.map(({id, Icon, seconds})=>(
                                        <Button variant={Number(form.watch("exerciseTime"))===seconds ? "default" : "outline"} key={id} onClick={()=>form.setValue("exerciseTime",seconds.toString())} type="button">
                                             <Icon className="size-5" />
                                             {seconds} վայրկյան
                                        </Button>
                                   ))}
                              </div>
                         </Field>
                         <FieldSeparator/>
                         <Field>
                              <FieldLabel>Տեսակ</FieldLabel>
                              <Controller
                                   control={form.control}
                                   name="pattern"
                                   render={({field})=>(
                                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                                             {Object.entries(BREATHING_PATTERNS).map(([id,p])=>(
                                                  <FieldLabel key={id} htmlFor={id}>
                                                       <Field orientation="horizontal">
                                                            <FieldContent>
                                                                 <FieldTitle>{p.label}</FieldTitle>
                                                            </FieldContent>
                                                            <RadioGroupItem value={id} id={id} />
                                                       </Field>
                                                  </FieldLabel>
                                             ))}
                                        </RadioGroup>
                                   )}
                              />
                         </Field>
                    </FieldGroup>
                    <Field orientation="horizontal">
                         <Button type="submit">Հաստատել</Button>
                         <Button variant="outline" type="button" onClick={()=>{
                              form.reset();
                              setOpen(false);
                         }}>
                              Չեղարկել
                         </Button>
                    </Field>
               </FieldSet>
          </form>
     )
}