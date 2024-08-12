export enum Sex {
  male = 1,
  female = 0
}

export const sexText = {
  [Sex.male]: {
    color: '#108ee9',
    val: '男'
  },
  [Sex.female]: {
    color: '#f50',
    val: '女'
  }
}