import { Card } from "@/components/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowLeftIcon } from "lucide-react";
import { useUserDetails } from "./hook/use-user-details";

export const UserDetails = () => {
  const { form, onSubmit, navigate, canEditDetails, titleUserDetails } =
    useUserDetails();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
        <div className="h-full flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-[4.875rem] text-vega-gray-800 flex items-center gap-2">
              <ArrowLeftIcon
                className="text-vega-yellow-800 cursor-pointer"
                size={32}
                onClick={() => navigate(-1)}
              />
              {titleUserDetails}
            </h1>

            <Card className="min-h-[28.125rem]">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input {...field} className="w-full" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gênero</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Linguagem</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </Card>
          </div>

          <footer className="flex justify-between  -mx-[3.125rem] px-[3.125rem]  py-6 shadow-inner">
            <Button variant="outline" onClick={() => navigate("/user")}>
              Voltar
            </Button>
            <Button
              type="submit"
              className="bg-vega-yellow-800"
              disabled={!canEditDetails}
            >
              Salvar usuário
            </Button>
          </footer>
        </div>
      </form>
    </Form>
  );
};
