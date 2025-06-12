
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function UPSCTNPSCPlanner() {
  const [week, setWeek] = useState("June 17–23");

  const weeklyPlan = {
    "June 17–23": {
      upsc: [
        "Modern History: Revolt of 1857, Socio-religious Movements",
        "Polity: Fundamental Rights",
        "CA: June 1–15 PDF Revision",
        "MCQ Test: History + CA (10 Qs)",
        "1 Hour Answer Writing Practice (GS1 Topics)"
      ],
      tnpsc: [
        "Samacheer History Class 11 – Unit 1 & 2",
        "Polity: Constitution Basics",
        "Current Affairs TN (June 1–15)",
        "MCQ Practice (10 Qs)",
        "TNPSC GS Revision Notes"
      ]
    },
    "June 24–30": {
      upsc: [
        "Modern History: INC Formation, Early Congress",
        "Polity: Directive Principles of State Policy",
        "CA: June 16–23 PDF Revision",
        "MCQ Test: Polity + CA (10 Qs)",
        "Essay Practice (GS2 Topics)"
      ],
      tnpsc: [
        "Samacheer History Class 11 – Unit 3 & 4",
        "Polity: Union Government",
        "Current Affairs TN (June 16–23)",
        "MCQ Practice (10 Qs)",
        "TNPSC Economy Basics Notes"
      ]
    }
  };

  const currentPlan = weeklyPlan[week];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">UPSC + TNPSC Planner</h1>
      <Card>
        <CardContent className="space-y-2">
          <h2 className="text-lg font-semibold">📅 Week: {week}</h2>
          <div className="flex gap-2">
            {Object.keys(weeklyPlan).map((w) => (
              <Button key={w} onClick={() => setWeek(w)} variant={week === w ? "default" : "outline"}>
                {w}
              </Button>
            ))}
          </div>
          <div>
            <h3 className="font-medium">UPSC:</h3>
            <ul className="list-disc list-inside">
              {currentPlan.upsc.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium">TNPSC:</h3>
            <ul className="list-disc list-inside">
              {currentPlan.tnpsc.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
      <Button className="w-full">Download PDFs & Tests</Button>
    </div>
  );
}
