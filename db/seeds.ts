import db from "./index"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */
const seed = async () => {
  for (let i = 0; i < 5; i++) {
    await db.internship.create({
      data: {
        position: "senior frontend engineer",
        contract: "full time",
        location: "palo alto, california, usa",
        logo: "https://bookassist.org/wp-content/uploads/elementor/thumbs/google_3_520-oc7dqerwmsbfad0t1gveosa6x2uck2bd7y6l2r7txs.jpg",
        company: "google",
        role: "senior software engineer",
        tools: ["react", "javascript", "typescript", "css"],
      },
    })
  }
}

export default seed