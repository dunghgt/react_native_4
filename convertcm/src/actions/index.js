import { CONVERT_NUMBER, CHOICE_UNIT, CHOICERIGHT_UNIT } from "./type";

export const convertNumber = (data) => ({
    type: CONVERT_NUMBER,
    payload: data
})

export const choiceUnit = (data) => ({
    type: CHOICE_UNIT,
    payload: data
})

export const choiceRightUnit = (data) => ({
    type: CHOICERIGHT_UNIT,
    payload: data
})