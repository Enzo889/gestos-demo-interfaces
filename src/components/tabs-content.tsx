import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CarouselDApiDemo } from "./tabs1";
import { DrawerDemo } from "./tabs2";
import { ResizableDemo } from "./tabs3";
import { PasswordGenerator } from "./tabs4";

export function TabsDemo() {
  const demosNames = ["Carousel", "Drawer", "Resizable", "Slider", "Draggable"];
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full gap-2 grid-cols-5">
        {demosNames.map((name) => (
          <TabsTrigger key={name} value={name}>
            {name}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent className="mt-6" value={demosNames[0]}>
        <CarouselDApiDemo />
      </TabsContent>
      <TabsContent className="mt-6 " value={demosNames[1]}>
        <Card>
          <CardContent className="flex justify-center items-center pt-4">
            <DrawerDemo />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent className="mt-6 flex justify-center" value={demosNames[2]}>
        <ResizableDemo />
      </TabsContent>
      <TabsContent className=" flex justify-center" value={demosNames[3]}>
        <PasswordGenerator />
      </TabsContent>
      <TabsContent value={demosNames[4]}>
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
