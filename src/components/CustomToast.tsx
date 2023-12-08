import { toast } from "react-hot-toast";
import { WarningTwoIcon, InfoIcon } from "@chakra-ui/icons";

export const CustomToast = (alert_type: string, message: string) => {
    switch (alert_type) {
        case "success":
            return toast.success(message);
        case "error":
            return toast.error(message);
        case "warning":
            return toast(message, { icon: <WarningTwoIcon color={'yellow'} /> });
        case "info":
            return toast(message, { icon: <InfoIcon color={'blue'} /> });
    }
};
