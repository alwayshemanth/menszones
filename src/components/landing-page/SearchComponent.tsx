"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


const formSchema = z.object({
    search : z.string()
  })

export default function SearchComponent() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          search: "",
        },
      })

  return (
    <Form {...form}>
      <form className="w-full grid grid-cols-[1fr_auto]">
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Search the product" className="rounded-full p-5 py-6  dark:bg-neutral-900 truncate"/>
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
        
      </form>
    </Form>
  );
}
