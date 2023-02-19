import { AppKey } from "~~/types/appKey";

const query = gql`
  {
    settings {
      id
      current
    }
  }
`;

const defaultSetting: AppKey = {
  formatDate: "dd-MM-yyyy",
};

export const useAppSetting = () => {
  const getSetting = async () => {
    const { data, error } = await useAsyncQuery<any>(query);
    data.value?.settings?.forEach((e: any) => {
      defaultSetting[e.id] = e.current;
    });
    setting.value = defaultSetting;
    return setting.value;
  };

  const setting = useState<AppKey>("appSetting", () => {
    return defaultSetting;
  });

  return { setting, getSetting };
};
