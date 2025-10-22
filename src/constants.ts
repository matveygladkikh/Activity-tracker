import { generatePeriodSelectOptions } from './functions'
import { ButtonType, IconName, type NavItem, PageName } from './types'

export const LOCAL_STORAGE_KEY = 'activity-tracker'

export const NAV_ITEMS: NavItem[] = [
  {
    page: PageName.TIMELINE,
    icon: IconName.CLOCK,
  },
  {
    page: PageName.ACTIVITIES,
    icon: IconName.LIST_BULLET,
  },
  {
    page: PageName.PROGRESS,
    icon: IconName.CHART_BAR,
  },
]

export const BUTTON_TYPES: ButtonType[] = [
  ButtonType.PRIMARY,
  ButtonType.DANGER,
  ButtonType.NEUTRAL,
  ButtonType.SUCCESS,
  ButtonType.WARNING,
]

export const SECONDS_IN_MINUTE = 60
export const MINUTES_IN_HOUR = 60
export const MILLISECONDS_IN_SECOND = 1000

export const MIDNIGHT_HOUR = 0
export const HOURS_IN_DAY = 24
export const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * MINUTES_IN_HOUR
export const SECONDS_IN_DAY = HOURS_IN_DAY * SECONDS_IN_HOUR

export const LOW_PERCENT = 33
export const MEDIUM_PERCENT = 6
export const HUNDRED_PERCENT = 100

export const PERIOD_SELECT_OPTIONS = generatePeriodSelectOptions()
