import {
  PAGE_TIMELINE,
  PAGE_ACTIVITIES,
  PAGE_PROGRESS,
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING,
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
} from './constants'

export type PageName = typeof PAGE_TIMELINE | typeof PAGE_ACTIVITIES | typeof PAGE_PROGRESS

export type ButtonType =
  | typeof BUTTON_TYPE_PRIMARY
  | typeof BUTTON_TYPE_DANGER
  | typeof BUTTON_TYPE_NEUTRAL
  | typeof BUTTON_TYPE_SUCCESS
  | typeof BUTTON_TYPE_WARNING

export interface NavItem {
  page: PageName
  icon: any
}

export interface SelectOptions<T = string> {
  value: T
  label: string
}

export interface Activity {
  id: string
  name: string
  secondsToComplete: number
}

export interface State {
  timelineItems: TimelineItem[]
  activities: Activity[]
  lastActiveAt: Date
}

export interface TimelineItem {
  hour: number
  activityId: Activity['id'] | null
  activitySeconds: number
  isActive: boolean
}

export enum ProgressColorClass {
  RED = 'bg-red-500',
  YELLOW = 'bg-yellow-500',
  BLUE = 'bg-blue-500',
  GREEN = 'bg-green-500',
}
