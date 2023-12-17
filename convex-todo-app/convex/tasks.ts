import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

export const getItemList = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('tasks').collect()
  }
}
)

export const addItem = mutation({
  args:{
    text:v.string(),
    isCompleted:v.optional(v.boolean())
  },
  handler: async (ctx,args)=>{
    const newItemList = ctx.db.insert('tasks',args)
    return newItemList
  }
})