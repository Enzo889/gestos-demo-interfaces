import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CarouselDApiDemo } from "./tabs1";
import { DrawerDemo } from "./tabs2";
import { ResizableDemo } from "./tabs3";
import { PasswordGenerator } from "./tabs4";
import ReorderDemo from "./tabs5";

export function TabsDemo() {
  const demosNames = ["Carousel", "Drawer", "Resizable", "Slider", "Reorder"];
  return (
    <Tabs defaultValue={demosNames[0]} className="w-full">
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
        <ReorderDemo />
      </TabsContent>
    </Tabs>
  );
}
