"use client"
import { useIsMobile } from "@/hooks/use-mobile"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "./ui/drawer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

interface PopupComponentProps{
     open: boolean;
     onOpen: (open: boolean) => void,
     children: React.ReactNode,
     title: string,
     description?: string,
}
export default function PopupComponent({open, onOpen, children, title, description}: PopupComponentProps){
     const isMobile = useIsMobile();
     return isMobile ? (
          <Drawer open={open} onOpenChange={onOpen}>
               <DrawerContent>
                    <DrawerHeader>
                         <DrawerTitle>{title}</DrawerTitle>
                         {description && (
                              <DrawerDescription>{description}</DrawerDescription>
                         )}
                    </DrawerHeader>
                    <div className="p-5 overflow-y-auto">
                         {children}
                    </div>
               </DrawerContent>
          </Drawer>
     ) : (
          <Dialog open={open} onOpenChange={onOpen}>
               <DialogContent>
                    <DialogHeader>
                         <DialogTitle>{title}</DialogTitle>
                         {description && (
                              <DialogDescription>{description}</DialogDescription>
                         )}
                    </DialogHeader>
                    {children}
               </DialogContent>
          </Dialog>
     )
}