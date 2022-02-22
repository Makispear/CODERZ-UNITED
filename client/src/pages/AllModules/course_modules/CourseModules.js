import CourseMaterial from "../../../components/CourseMaterial";
import BrandName from "../../../utils/BrandName";

export default function CourseModules() {

  document.title = `Learn Web Development | ${BrandName}`

  return (
    <section>
      <CourseMaterial />
    </section>
  )
}

