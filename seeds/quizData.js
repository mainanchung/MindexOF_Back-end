/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

//  .createTable('types', (table) => {
//   table.increments('id').primary();
//   table.string('type').notNullable();
//   table.string('type_name').notNullable();
//   table.string('description').notNullable();
//   table.string('trait').notNullable();
//   table.string('career').notNullable();
//   table.string('image').notNullable();
// })

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('types').del()
  await knex('types').insert([
    {
      type: 'ISTJ',
      type_name: 'INSPECTOR',
      description:'People with this personality generally appear serious and formal. They usually love traditions and believe in values like honor, hard work and social responsibility. They are typically reserved, quiet, calm and upright. At work, they are known for being responsible and reliable. They thrive in an organized workplace and prefer to have rules laid out for them. They like to use analytical and critical thought and are highly detail-oriented.',
      trait:JSON.stringify(["Decisive","Detail-oriented", "Reliable", "Persistent","Logical"]),
      career:JSON.stringify(["Dentist", "Certified public accountant", "Supply chain managers",  "Bank teller",  "Military officer",  "Inspector", "Lawyer", "Civil engineer", "Executive Consultant", "Financial analyst", "Actuary", "Bailiff",  "Investigator", "Forensic psychologist", "Secretary", "Judge", "Program administrator", "Executive assistant", "Support specialist", "Auditor", "Budget analyst", "Financial controller"]),
      image:"http://localhost:8080/images/ISTJ.png"      
    },
    {
      type: 'INFJ',
      type_name: 'COUNSELOR',
      description:'INFJs are usually idealists who have a profound way of looking at the world. They usually don’t take things at the surface level or accept things as they are. They are often overflowing with ideas and creative imagination. When it comes to careers, they appreciate peaceful work environments and are deep thinkers who appreciate challenges at work. They are empathetic and caring, helpful and insightful.',
      trait:JSON.stringify(["Compassionate", "Idealist", "Practical", "Future-oriented", "Intuitive nature"]),
      career:JSON.stringify(["Chaplain", "Paralegal", "Civil service administrator", "Advocate", "UX designer", "HR business partner", "Digital marketing manager", "Content editor", "Counselor", "Teacher", "Art directors", "Art agents", "Graphic designers", "Animators","Writers"]),
      image:"http://localhost:8080/images/INFJ.png"      
    },
    {
      type: 'ISFJ',
      type_name: 'DEFENDER',
      description:'Conventional and grounded, ISFJs strive to uphold established structures and maintain orderly environments. They have a strong work ethic that includes serving others and dedication to their duties. ISFJs are conscientious and organized workers who aren’t satisfied until the job is done.',
      trait:JSON.stringify(["Practical", "Hardworking", "Supportive", "Honest"]),
      career:JSON.stringify(["Account manager", "Research analyst", "Museum curator", "Historian","Office manager","Human resources", "Account manager"," Film editor", "Librarian", "School administrator", "Health care worker ", "Radiation therapist"]),
      image:"http://localhost:8080/images/ISFJ.png"     
    },
    {
      type: 'INFP',
      type_name: 'HEALER',
      description:'These highly curious, inquisitive and innovative individuals comprise just 2% of the population, though their world views can make them inspiring team members. INFPs are highly creative and enjoy abstract thinking.',
      trait:JSON.stringify(["Sensitive", "Caring", "Compassionate", "Flexible", "Generous"]),
      career:JSON.stringify(["Artist", "Film editor", "Journalist",  "Photographer",  "Graphic designer", "Copywriter",  "Content strategist",  "Creative director", "Design technologist"]),
      image:"http://localhost:8080/images/INFP.png"     
    },
    {
      type: 'ENFJ',
      type_name: 'TEACHER',
      description:'You are often charismatic, empathetic leaders. They are highly intuitive regarding others’ emotions, needs and motivations. ENFJs are often loyal and responsible, looking for ways to improve their team by leading with inspiration and responsiveness. ENFJs often look for opportunities where they can bring people together to make a difference.',
      trait:JSON.stringify(["Altruistic", "Confident", "Energetic", "Charismatic", "Tolerant", "Empathic"]),
      career:JSON.stringify(["Art director", "Market research analyst", "Mediator", "Public speaker", "Real estate broker",  "Guidance counselor", " Teacher", "Sales manager"]),
      image:"http://localhost:8080/images/ENFJ.png"     
    },
    {
      type: 'ENFP',
      type_name: 'CHAMPION',
      description:'The ENFP type is generally innovative, inspiring and unafraid of taking risks. ENFPs comprise approximately 8% of the general population and include more women than men. They are highly perceptive when understanding how individuals and groups function, making them natural leaders. ENFPs want excitement, enjoy abstract and experiential learning and look for maximum potential in their career experiences and others.',
      trait:JSON.stringify(["Altruistic", "Confident", "Energetic", "Charismatic", "Tolerant", "Empathic"]),  
      career:JSON.stringify(["Campaign manager ", "Urban planner", "Mentor", "Actor", "Musician", "Writer", "Reporter", "Anchor", "Copywriter", "Editor", "Producer", "Graphic designer", "Web designer", "Public relations specialist", "Product manager", "Entrepreneur", "Agent", "Customer support specialist", "Personal trainer", "Occupational therapist"," Social worker", "Counselor"]),  
      image:"http://localhost:8080/images/ENFP.png"     
    },
    {
      type: "INTJ",
      type_name: 'MASTERMIND',
      description:'INTJs are usually quiet, reserved and comfortable being alone. Socializing often drains their energy and they need alone time to recharge. They are interested in ideas and theories and enjoy questioning why things happen the way they do. They excel at planning and strategizing and dont like uncertainty. They have a talent for recognizing connections that makes them natural problem-solvers and they are skilled at both intuitive and practical thinking.',
      trait:JSON.stringify(["Altruistic", "Confident", "Energetic", "Charismatic", "Tolerant", "Empathic"]),
      career:JSON.stringify(["Director of Photography", "Musical Performer", "Creative director", "Product manager","Marketing manager"," Business strategist", "Software developer", "Financial advisor", "Accountant", "Auditor","Economist", "Professor", "School administratorm", "Guidance counselor", "Paralegal", "Attorney", "Counsel","Personal trainer","Physician"]),
      image:"http://localhost:8080/images/INTJ.png"      
    },
    {
      type: 'ENTJ',
      type_name: 'COMMANDER',
      description:'Natural leaders, the ENTJ personality type is often honest and ready to make quick decisions. They are quick to spot inefficiencies and develop ways to solve problems. ENTJs value goal-setting, organization and planning. They are charismatic and confident, which helps them to rally a group behind a common goal.',
      trait:JSON.stringify(["Altruistic", "Confident", "Energetic", "Charismatic", "Tolerant", "Empathic"]),
      career:JSON.stringify(["Budget analyst", "Business administrator", "Construction manager", "Judge", "Public relations specialist", "Financial analyst", "Project manager", "Construction manager", "Civil engineer", "Management consultant", "Auditor", "Network administrator", "Salesperson", "Lawyer", "Public speaker"]),
      image:"http://localhost:8080/images/ENTJ.png"     
    },
    {
      type: "ENTP",
      type_name: 'VISIONARY',
      description:'ENTPs don’t usually enjoy small talk or thrive in social situations. They are intelligent and knowledgeable and need to be constantly stimulated mentally. They are logical, rational and objective. ENTPs prefer to focus on big ideas and resist repetitive tasks and routines. They prefer conceptual work and problem-solving. ENTPs are ideal for entrepreneurial thinking and find working within hierarchies difficult.',
      trait:JSON.stringify(["Entrepreneurial", "Friendly", "Resourceful", "Independent", "Expressive", "Nonjudgmental", "High-achiever"]),
      career:JSON.stringify(["Attorney", "Financial planner", "Psychologist", "Systems analyst", "Creative director", "Operations specialist", "Environmental scientist", "Engineer", "Architect", "Researcher", "Management analyst", "Product manager", "Software developer", "Business consultant", "Computer programmer", "Designer", "Animator", "Copywriter"]),
      image:"http://localhost:8080/images/ENTP.png"      
    },
    {
      type: "INTP",
      type_name: 'ARCHITECT',
      description:'Quiet and contained, the INTP enjoys abstract ideas and deep thought about theories over interaction with others. They desire logical answers to questions or problems that arise in their environment. Often skeptical and analytical, INTPs are great problem-solvers, helpful when certain business issues present themselves. They are usually creative, intelligent and attentive.',
      trait:JSON.stringify(["Analytical", "Imaginative", "Objective", "Enthusiastic", "Straightforward"]),
      career:JSON.stringify(["Architect", "Business analyst", "Computer programmer", "Forensic medical examiner", "Information security analyst", "Technical writer", "Archaeologist", "Lawyer", "Biomedical engineer", "Composer", "Computer systems analyst", "Environmental scientist", "Marketing consultant"]),
      image:"http://localhost:8080/images/INTP.png"      
    },
    {
      type: "ESFJ",
      type_name: 'PROVIDER',
      description:'ESFJs are serious and practical, committed to their responsibilities and sensitive to the needs of others. They strive for harmony, are generous with their time, efforts, and emotions, and are eager to please—both at work and home. ESFJs value loyalty and tradition and hold to a strict moral code. They typically enjoy their routines and maintain a regular schedule that allows them to be productive.',
      trait:JSON.stringify(["Genuine", "Empathetic", "Encouraging","Motivated", "Generous", "Loyal", "Sense of duty"]),
      career:JSON.stringify(["Accountant", "Advertising sales", "Event planner", "Guidance counselor", "Curator", "Nurse", "Nutritionist", "Office manager", "Optometrist", "Physician", "Psychologist", "Receptionist", "Social worker", "Technical support specialist"]),
      image:"http://localhost:8080/images/ESFJ.png"     
    },
    {
      type:"ESFP",
      type_name: 'PERFORMER',
      description:'Often seen as the entertainer, the ESFP personality type is outgoing, friendly and generous. They enjoy spending time around others, spreading excitement and joy at home and work. While practical and realistic in their work, they also value having fun achieving their goals. They are energetic and flexible, encouraging others along the way.',
      trait:JSON.stringify(["Practical", "Creative", "Outgoing", "Collaborative", "Perceptive"]),
      career:JSON.stringify(["Event planner", "Firefighter", "Flight attendant", "Tour guide", "Wait staff", "Creative director", "Project manager", "Chief financial officer", "Financial planner", "Architect"]),
      image:"http://localhost:8080/images/ESFP.png"
    },
    {
      type:"ISFP",
      type_name: 'COMPOSER',
      description:'The ISFP personality type is usually friendly and quiet, observing the environment around them. They typically prefer autonomy and working in their own space on their schedules. ISFPs value loyalty and commitment in their relationships. Harmony is also important to ISFPs, avoiding confrontation and keeping their opinions to themselves.',
      trait:JSON.stringify(["Adventurous", "Artistic", "Competitive", "Cooperative", "Creative", "Non-confrontational", "Quiet", "Sensitive"]),
      career:JSON.stringify(["Archaeologist", "Dietician", "Occupational therapist", "Veterinarian", "Marketer", "Chef", "Artist", "Teacher", "Environmental scientist"]),
      image:"http://localhost:8080/images/ISFP.png"
    },
    {
      type:"ESTJ",
      type_name: 'SUPERVISOR',
      description:'ESTJs are organized, dedicated, honest, dignified, traditional and believers in doing what they believe is right and socially acceptable. They often take the role of leader and people look to them for guidance and counsel. ESTJs are methodical, organized, dedicated, reliable and direct. They excel at following set procedures closely and adhering to guidelines. They’re dedicated and hardworking. ',
      trait:JSON.stringify(["Organized", "Reliable", "Methodical", "Dedicated"]),
      career:JSON.stringify(["Building inspector", "Hotel manager", "Paralegal", "Police officer", "Real estate agent", "Physician", "Sales manager", "Systems engineer", "Project manager"]),
      image:"http://localhost:8080/images/ESTJ.png"
    },
    {
      type:"ESTP",
      type_name: 'DYNAMO',
      description:'The ESTP personality type is often referred to as entrepreneurial. They are energetic, pragmatic and flexible. Eagerly searching for fast results, they often take risks to come up with the best solutions. ESTPs enjoy a fast-paced lifestyle by living “in the moment” and spending time around groups of people. ',
      trait:JSON.stringify(["Practical", "Creative", "Outgoing", "Collaborative", "Perceptive"]),
      career:JSON.stringify(["Actor", "Entrepreneur", "Marketer", "Paramedic", "Stockbroker", "Creative director", "Project manager", "Chief financial officer","Architect", "Financial Planner", "Vocational Teacher"]),
      image:"http://localhost:8080/images/ESTP.png"
    },
    {
      type:"ISTP",
      type_name: 'CRAFTSMAN',
      description:'The ISTP personality type is typically quiet and observant. When a problem arises, they are tolerant, flexible and quick to find a solution. Organized and practical, the ISTP values data, logic and fact. ISTPs often find meaningful work making and creating things, finding ways to make things work and learning along the way.',
      trait:JSON.stringify(["Critical", "Resourceful", "Self-motivated", "Optimistic", "Nonjudgmental", "Calm"]),
      career:JSON.stringify(["Airline pilot", "Chef", "Economist", "Health inspector", "Forensic scientist", "Investment banker", "Historian", "Technician", "Inspector", "Carpenter", "Machinist", "Engineer"]),
      image:"http://localhost:8080/images/ISTP.png"
    }  
  ]);
};
