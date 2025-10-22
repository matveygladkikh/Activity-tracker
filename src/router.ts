import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'
import { ref, type Component } from 'vue'
import { PageName } from './types'
import { NAV_ITEMS } from './constants'

export const routes: Record<PageName, Component> = {
  [PageName.TIMELINE]: TheTimeline,
  [PageName.ACTIVITIES]: TheActivities,
  [PageName.PROGRESS]: TheProgress,
}

export const currentPage = ref<PageName>(normalizePageHash())

export function navigate(page: PageName): void {
  document.body.scrollIntoView()

  currentPage.value = page
}

function normalizePageHash(): PageName {
  const page = window.location.hash.slice(1)

  if (NAV_ITEMS.some((navItem) => navItem.page === page)) {
    return page as PageName
  }

  window.location.hash = PageName.TIMELINE

  return PageName.TIMELINE
}
