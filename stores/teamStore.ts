// stores/teamStore.ts
import { defineStore } from 'pinia'

type Team = {
  label: string
  value: string
}

type Group = {
  label: string
  teams: Team[]
}

const initialGroups: Group[] = [
  {
    label: '',
    teams: [
      {
        label: 'HR departement',
        value: 'hr',
      },
    ],
  },
  {
    label: 'Teams',
    teams: [
      {
        label: 'Finacial.',
        value: 'financial',
      },
      {
        label: 'Developement .',
        value: 'dev',
      },
    ],
  },
]

export const useTeamStore = defineStore('team', {
  state: () => ({
    groups: initialGroups,
  }),
  actions: {
    setGroups(newGroups: Group[]) {
      this.groups = newGroups
    },
    addTeamToGroup(groupLabel: string, team: Team) {
      const group = this.groups.find(g => g.label === groupLabel)
      if (group) {
        group.teams.push(team)
      }
    }
  },
  getters: {
    getGroups: (state) => state.groups,
  }
})
