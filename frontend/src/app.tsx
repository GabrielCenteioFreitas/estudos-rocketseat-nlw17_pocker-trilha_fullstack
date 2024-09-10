import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
// import { EmptyGoals } from './components/empty-goals'
import { Dialog } from './components/ui/dialog'

export const App = () => {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}

      <Summary />

      <CreateGoal />
    </Dialog>
  )
}
