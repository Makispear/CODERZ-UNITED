import CourseMaterial from "../../../components/CourseMaterial";
import WelcomeUser from "../../../components/WelcomeUser";

import { goBack } from "../../../utils/previousPage";


export default function CourseModules() {

  document.title = "Learn Web Development | Coderz United"

  return (
    <section>
      <CourseMaterial />
    </section>
  )
}

