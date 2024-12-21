import { Reorder } from "motion/react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function ReorderDemo() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  return (
    <main>
      <Reorder.Group values={items} onReorder={setItems}>
        {items.map((item, index) => (
          <Reorder.Item key={item} value={item}>
            <Card className="my-4 cursor-grab active:cursor-grabbing">
              <CardHeader>
                <CardTitle>Item {index}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </CardContent>
            </Card>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </main>
  );
}
