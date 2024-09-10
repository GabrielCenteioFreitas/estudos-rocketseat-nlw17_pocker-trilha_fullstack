import fastify from 'fastify'
import { createGoal } from '../functions/create-goal'
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'
import { getWeekPendingGoals } from '../functions/get-week-pending-goals'
import { createGoalCompletion } from '../functions/create-goal-completion'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.get('/goals/pending', async () => {
  const { pendingGoals } = await getWeekPendingGoals()

  return { pendingGoals }
})

app.post('/goals/completions', {
  schema: {
    body: z.object({
      goalId: z.string(),
    })
  }
}, async (req, res) => {
  const { goalId } = req.body

  await createGoalCompletion({
    goalId,
  })
})

app.post('/goals', {
  schema: {
    body: z.object({
      title: z.string(),
      desiredWeeklyFrequency: z.number().int().min(1).max(7),
    })
  }
}, async (req, res) => {
  const { title, desiredWeeklyFrequency } = req.body

  await createGoal({
    title,
    desiredWeeklyFrequency,
  })
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 Server running!')
  })
