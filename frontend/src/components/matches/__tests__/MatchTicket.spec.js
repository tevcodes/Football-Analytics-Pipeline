import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import MatchTicket from '../MatchTicket.vue'

describe('MatchTicket.vue', () => {
    it('renders team names correctly', () => {

        const wrapper = mount(MatchTicket, {
            props: {
                match: {
                  homeTeam: 'Stellenbosch FC',
                  awayTeam: 'Mamelodi Sundowns',
                  league: 'PSL'
                }
            }
        })

        expect(wrapper.text()).toContain('Stellenbosch FC')
        expect(wrapper.text()).toContain('Mamelodi Sundowns')
    })

    it('falls back to 0.00 when xG data is missing', () => {
        const wrapper = mount(MatchTicket, {
            props: {
              match: {
                homeTeam: 'Chiefs',
                awayTeam: 'Pirates',
                homeXG: undefined
              }
            }
        })

        expect(wrapper.text()).toContain('0.00')
    })
})