import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'

export type PageName = typeof PAGE_TIMELINE | typeof PAGE_ACTIVITIES | typeof PAGE_PROGRESS

export interface Activity {
  id: string
  name: string
  secondsToComplete: number
}

export interface State {
  timelineItems: any
  activities: Activity[]
  lastActiveAt: Date
}

export interface ActivitySelectOptions {
  value: string
  label: string
}
