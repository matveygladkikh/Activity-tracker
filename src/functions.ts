import {
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  MILLISECONDS_IN_SECOND,
  LOW_PERCENT,
  MEDIUM_PERCENT,
  HUNDRED_PERCENT,
} from './constants'
import { type SelectOptions, ProgressColorClass } from './types'

export function formatSecondsWithSign(seconds: number): string {
  return `${seconds >= 0 ? '+' : '-'}${formatSeconds(seconds)}`
}

export function formatSeconds(seconds: number): string {
  const data = new Date()

  data.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECOND)

  const utc = data.toUTCString()

  return utc.substring(utc.indexOf(':') - 2, utc.indexOf('G') - 1)
}

export function normalizeSelectValue(value: any): any {
  return value === null || isNaN(value) ? value : +value
}

export function id(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function getColorProgressClass(percentage: number): ProgressColorClass {
  if (percentage < LOW_PERCENT) return ProgressColorClass.RED
  if (percentage < MEDIUM_PERCENT) return ProgressColorClass.YELLOW
  if (percentage < HUNDRED_PERCENT) return ProgressColorClass.BLUE

  return ProgressColorClass.GREEN
}

export function generatePeriodSelectOptions(): SelectOptions<number>[] {
  const periodsInMinutes = [15, 30, 45, 60, 90, 120, 150, 180, 210, 240]

  return periodsInMinutes.map(
    (periodInMinutes): SelectOptions<number> => ({
      value: periodInMinutes * SECONDS_IN_MINUTE,
      label: generatePeriodSelectOptionsLabel(periodInMinutes),
    }),
  )
}

function generatePeriodSelectOptionsLabel(periodInMinutes: number): string {
  const hours = Math.floor(periodInMinutes / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, '0')

  const minutes = (periodInMinutes % MINUTES_IN_HOUR).toString().padStart(2, '0')

  return `${hours}:${minutes}`
}
