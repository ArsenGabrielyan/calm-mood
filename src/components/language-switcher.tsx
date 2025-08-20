import { 
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue
} from "./ui/select";
import { CircleFlag } from 'react-circle-flags'
// TODO: Implement next-intl and make the Language Switcher work

export default function LanguageSwitcher(){
     return (
          <Select defaultValue="hy">
               <SelectTrigger>
                    <SelectValue />
               </SelectTrigger>
               <SelectContent>
                    <SelectItem value="hy" className="gap-3">
                         <CircleFlag countryCode="am" className="size-4"/>
                         Հայերեն
                    </SelectItem>
                    <SelectItem value="en" className="gap-3">
                         <CircleFlag countryCode="us" className="size-4"/>
                         English
                    </SelectItem>
                    <SelectItem value="ru" className="gap-3">
                         <CircleFlag countryCode="ru" className="size-4"/>
                         Русский
                    </SelectItem>
                    <SelectItem value="ka" className="gap-3">
                         <CircleFlag countryCode="ge" className="size-4"/>
                         ქართული
                    </SelectItem>
               </SelectContent>
          </Select>
     )
}