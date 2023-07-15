import { currentDate } from "./dateFormater"

export function defaultTask(user) {
    return { userId:user?.id,
        briefDes:"",
        detailedDes: "",
        dateOfSubmission:currentDate(),
        dateOfFulfillment:currentDate(),
        reference:""
      }
}