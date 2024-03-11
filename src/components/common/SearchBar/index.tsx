import { Field, Form, Formik, FormikHelpers } from "formik";
import { FaSearch } from "react-icons/fa";
import { InitSearch } from "types";
import * as Yup from "yup";

export interface SearchBarProps {
  placeholder: string;
  onSubmit: (value: InitSearch, actions: FormikHelpers<InitSearch>) => void;
}

export const SearchBarComponent: React.FC<SearchBarProps> = ({
  placeholder,
  onSubmit,
}) => {
  const SearchSchema = Yup.object().shape({
    name: Yup.string().required(`Keyword is required`),
  });
  return (
    <Formik
      initialValues={{
        name: "",
      }}
      validationSchema={SearchSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="min-w-full flex flex-col gap-5">
          <div className="border dark:border-white border-gray-950 rounded-md px-3 flex items-center gap-3">
            <FaSearch className="fill-gray-950 dark:fill-white" size={20} />
            <Field
              data-cy="search-input"
              name="name"
              className="w-full bg-transparent py-2 focus:outline-none dark:text-white text-gray-950"
              placeholder={placeholder}
            />
          </div>
          <button
            type="submit"
            data-cy="search-btn"
            className="bg-blue-500 py-2 rounded-md"
          >
            Search
          </button>
          {errors.name && touched.name ? (
            <div className="text-xs text-red-500">{errors.name}</div>
          ) : null}
        </Form>
      )}
    </Formik>
  );
};
