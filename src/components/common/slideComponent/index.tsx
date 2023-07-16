import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'
import { CourseType } from '@/src/services/courseService';
import SlideCard from '../slideCard';

interface Props {
  course: CourseType[];
}

const SlideComponent = function ({ course }: Props) {
  return (
    <>
      <div className="d-flex flex-column align-items-center py-4">
        <Splide
          options={{
            type: 'loop',
            perPage: 4,
            perMove: 1,
            width: 1200,
            pagination: false,
          }}
        >
          {course?.map((course) => (
            <SplideSlide key={course.id}>
              <SlideCard course={course} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default SlideComponent;