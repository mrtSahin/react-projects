import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

export const getItemList = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('tasks').order('desc').collect()
  }
})

export const addItem = mutation({
  args:{
    text:v.string(),
    isCompleted:v.boolean()
  },
  handler: async (ctx,args)=>{
    const newItemList = ctx.db.insert('tasks',args)
    return newItemList
  }
})

export const updateIsCompleted = mutation({
  args:{
    id:v.id('tasks')
  },
  handler: async (ctx,args)=>{
    const item = await ctx.db.get(args.id)

    if(item?.isCompleted){
      return  ctx.db.patch(args.id,{isCompleted:false})
    }
    else{
      return  ctx.db.patch(args.id,{isCompleted:true})
    }
  }
})

export const updateText = mutation({
  args:{
    id:v.id('tasks'),
    text: v.string()
  },
  handler: async (ctx,args) =>{
    return ctx.db.patch(args.id,{text: args.text})
  }
})

export const deleteItem = mutation({
  args:{
    id:v.id('tasks')
  },
  handler: async (ctx,args) =>{

    return await ctx.db.delete(args.id)
  }
})