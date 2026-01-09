import { BreathingExerciseType } from "@/lib/types"
import { useForm, Controller } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { BreathingExerciseSchema } from "@/lib/schemas"
import { EXERCISE_INTERVAL_TIME } from "../contents/exercise"
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button"

interface Props{
     onSubmit: (values: BreathingExerciseType) => void,
     setOpen: (open: boolean) => void
}
export default function ExerciseSettings({onSubmit, setOpen}: Props){
     const form = useForm<BreathingExerciseType>({
          resolver: zodResolver(BreathingExerciseSchema),
          defaultValues: {
               exerciseTime: Math.round(EXERCISE_INTERVAL_TIME/1000).toString()
          }
     })
     console.log(form.watch("exerciseTime"), typeof form.watch("exerciseTime"))
     return (
          <form onSubmit={form.handleSubmit(onSubmit)}>
               <FieldSet>
                    <FieldGroup>
                         <Controller
                              control={form.control}
                              name="exerciseTime"
                              render={({field, fieldState})=>(
                                   <Field>
                                        <FieldLabel>Ցիկլի տևողություն</FieldLabel>
                                        <Input {...field} type="number" min={Math.round(EXERCISE_INTERVAL_TIME/1000)}  aria-invalid={fieldState.invalid}/>
                                        {fieldState.invalid && (
                                             <FieldError errors={[fieldState.error]} />
                                        )}
                                   </Field>
                              )}
                         />
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