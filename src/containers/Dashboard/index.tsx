import { useDispatch, useSelector } from "react-redux";

import { DashboardView } from "components/views";
import { AppActions, RootState } from "store";
import { InitSearch } from "types";
import { FormikHelpers } from "formik";

export const DashboardContainer: React.FC = () => {
  const dispatch = useDispatch();

  const onSubmit = (value: InitSearch, actions: FormikHelpers<InitSearch>) => {
    dispatch(AppActions.scan.getUserRequest(value));
    actions.resetForm();
  };

  const { users, repos } = useSelector((store: RootState) => store.scan);
  const openRepo = (name: string) => {
    dispatch(AppActions.scan.getRepoRequest(name));
  };
  return (
    <DashboardView
      SearchBarProps={{
        placeholder: "Enter username",
        onSubmit: onSubmit,
      }}
      users={users}
      openRepo={openRepo}
      repo={repos}
    />
  );
};
