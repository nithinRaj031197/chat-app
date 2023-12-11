import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
});

const ForgotPassword = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <div className="flex flex-col w-full gap-2">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <p className="text-center text-3xl font-bold">Forgot Password?</p>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Reset Password</Button>
        </form>
        <Link to="/sign-in" className="text-blue-400 text-sm">
          &larr; Back to Sign in
        </Link>
      </div>
    </Form>
  );
};

export default ForgotPassword;
