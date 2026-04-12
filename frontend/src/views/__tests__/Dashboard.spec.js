import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import DashboardView from '../DashboardView.vue'
import axios from 'axios'

vi.mock('axios')

describe('DashboardView.vue', () => {
    it('renders a list of match cards from the API', async () => {
        const mockMatches = [
            { _id: '1', homeTeam: 'Sundowns', awayTeam: 'Pirates', homeXG: 2.1, awayXG: 1.2 },
            { _id: '2', homeTeam: 'City', awayTeam: 'Chiefs', homeXG: 1.1, awayXG: 0.9 }
        ]

        axios.get.mockResolvedValue({ data: { data: mockMatches } })

        const wrapper = mount(DashboardView)

        await new Promise(resolve => setTimeout(resolve, 0))

        const cards = wrapper.findAllComponents({ name: 'MatchTicket' })
        expect(cards).toHaveLength(2)
    })
})