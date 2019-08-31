import Topic from "./Topic";
import Lecture from "./Lecture";
import Video from "./Video";

const designPatterns: Topic = new Topic("Design Pattern");
const observer: Topic = new Topic("Observer");
const composite: Topic = new Topic("Composition");
const patternsIntro: Lecture = new Lecture("Intro to Patterns");
const observerIntro: Lecture = new Lecture("Intro to observer");
const compositeIntro: Video = new Video("Intro to composite");
const indentLevel: string = "    ";

designPatterns.addModule(observer);
designPatterns.addModule(composite);
designPatterns.addModule(patternsIntro);
observer.addModule(observerIntro);
composite.addModule(compositeIntro)
designPatterns.display(indentLevel);
