import {prisma} from '../src/lib/prisma'

async function seed() {
     await prisma.event.create({
          data:{
               id: '67ad3067-7b13-4ea5-a0dd-8b1cd88e9f39',
               title: 'Unite summit',
               slug: 'unite-summit',
               details: 'Um evento para devs apaixonados(as) por código',
               maximumAttendees: 120
          }
     })
}

seed().then(()=>{
     console.log('Database seeded!')
     prisma.$disconnect()
})