import { Icons } from "@/components/icons";

export const students = [
  {
    name: "Candice",
    image: "/images/Student 2.png",
    comment: `Finished watching "Practice Problems" in "Saxon Math 5/4 - Lesson 6 "`,
    online: true,
    date: "Just Now",
    subjects: [
      { name: "Math", Icon: Icons.math, lessons: "17/50", score: 95 },
      { name: "Grammar", Icon: Icons.grammer, lessons: "12/45", score: 95 },
      { name: "Science", Icon: Icons.science, lessons: "22/50", score: 95 },
    ],
  },
  {
    name: "Edward",
    image: "/images/Student 2.png",
    comment: `Submitted the assignment "Warm Up" in "Saxon Grammar 5/4 - Lesson 6"`,
    online: false,
    date: "2 mins ago",
    subjects: [
      { name: "Math", Icon: Icons.math, lessons: "22/50", score: 95 },
      { name: "Grammar", Icon: Icons.grammer, lessons: "34/50", score: 50 },
      { name: "Science", Icon: Icons.science, lessons: "23/50", score: 50 },
    ],
  },
  {
    name: "Sydney",
    image: "/images/Student 3.png",
    comment: `Submitted a "Homework" question!`,
    online: true,
    date: "1 day ago",
    subjects: [
      { name: "Math", Icon: Icons.math, lessons: "19/50", score: 95 },
      { name: "Science", Icon: Icons.science, lessons: "22/50", score: 20 },
    ],
  },
];

export interface student {
  name: string;
  image: string;
  comment: string;
  online: boolean;
  date: string;
  subjects: {
    name: string;
    // Icon: (props: IconProps) => JSX.Element;
    lessons: string;
    score: number;
  }[];
}
