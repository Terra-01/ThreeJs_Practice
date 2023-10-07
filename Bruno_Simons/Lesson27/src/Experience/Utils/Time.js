import EventEmitter from './EventEmitter.js'

export default class Time extends EventEmitter
{
    constructor()
    {
        super()

        // Setup
        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16

        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }

    tick()
    {
        // console.log('tick')

        const currentTime = Date.now()
        // console.log(currentTime)
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start

        // console.log(this.delta)

        this.trigger('tick')

        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }
}