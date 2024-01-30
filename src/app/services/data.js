export const culturequestions = [
    {
        id: 'decisionMaking',
        label: 'How are major decisions typically made in your company?',
        options: [
            { value: 'A', label: 'Through well-defined hierarchies, with final decisions resting with leadership.' },
            { value: 'B', label: 'Through collaborative discussions and consensus among team members.' },
            { value: 'C', label: 'By empowered teams with the authority to make independent decisions.' },
            { value: 'D', label: 'Adaptively, with agility and responsiveness to changing circumstances.' },
        ],
    },
    {
        id: 'communicationChannels',
        label: 'What are the dominant communication channels within your company?',
        options: [
            { value: 'A', label: 'Formal channels like emails, reports, and presentations.' },
            { value: 'B', label: 'Open and informal communication, with frequent discussions and brainstorming.' },
            { value: 'C', label: 'Data-driven communication, focusing on analytics and evidence-based decision-making.' },
            { value: 'D', label: 'A flexible mix of formal and informal communication, depending on the context.' },
        ],
    },
    {
        id: 'workStyle',
        label: 'How would you describe the pace and expectations of work in your company?',
        options: [
            { value: 'A', label: 'Fast-paced and demanding, with high performance standards.' },
            { value: 'B', label: 'Flexible and results-oriented, with emphasis on work-life balance and individual goals.' },
            { value: 'C', label: 'Structured and process-driven, prioritizing accuracy and efficiency.' },
            { value: 'D', label: 'Creative and innovative, encouraging experimentation and pushing boundaries.' },
        ],
    },
    {
        id: 'teamDynamics',
        label: 'How would you characterize the way teams operate and collaborate in your company?',
        options: [
            { value: 'A', label: 'Individualistic, with a focus on individual contributions and expertise.' },
            { value: 'B', label: 'Collaborative and team-oriented, with shared goals and mutual support.' },
            { value: 'C', label: 'Competitive, with clear performance metrics and incentives for achieving results.' },
            { value: 'D', label: 'Supportive and encouraging, fostering trust, respect, and open communication.' },
        ],
    },
    {
        id: 'recognitionRewards',
        label: 'How do your company and teams acknowledge and reward individual and team achievements?',
        options: [
            { value: 'A', label: 'Primarily through formal performance reviews and bonus structures.' },
            { value: 'B', label: 'Through public recognition, celebrations, and peer-to-peer appreciation.' },
            { value: 'C', label: 'Through opportunities for growth and development, learning new skills and taking on new challenges.' },
            { value: 'D', label: 'Through a combination of formal and informal methods, tailored to individual preferences.' },
        ],
    },
    {
        id: 'conflictResolution',
        label: 'How are disagreements and conflicts typically addressed within your company and teams?',
        options: [
            { value: 'A', label: 'Through a formal process with defined communication channels and mediation steps.' },
            { value: 'B', label: 'Through open and honest dialogue, prioritizing understanding and finding common ground.' },
            { value: 'C', label: 'By focusing on collaborative problem-solving and seeking solutions that benefit all parties.' },
            { value: 'D', label: 'Depending on the severity and context, with flexibility and adaptation to the situation.' },
        ],
    },
];
export const employeequestions = [
    {
        id: 'motivationSource',
        label: 'What\'s the primary source of motivation for the majority of our employees?',
        options: [
            { label: 'Competitive salaries and benefits.' },
            { label: 'Meaningful work and impact on the company.' },
            { label: 'Opportunities for learning and development.' },
            { label: 'Strong team dynamics and a supportive culture.' },
        ],
    },
    {
        id: 'satisfactionWithDevelopment',
        label: 'Overall, how satisfied are employees with the current learning and development opportunities?',
        options: [
            { label: 'Very satisfied, they have diverse opportunities for growth.' },
            { label: 'Moderately satisfied, some areas need improvement.' },
            { label: 'Not very satisfied, limited options available.' },
            { label: 'Unsatisfied, lack of resources and support.' },
        ],
    },
    {
        id: 'comfortVoicingOpinions',
        label: 'Do employees feel comfortable voicing their opinions and ideas in meetings and discussions?',
        options: [
            { label: 'Always encouraged and actively promoted.' },
            { label: 'Sometimes, depending on the context and team dynamics.' },
            { label: 'Rarely, hierarchical culture discourages open communication.' },
            { label: 'Never, concerns are not openly addressed.' },
        ],
    },
    {
        id: 'leadershipEffectiveness',
        label: 'How would you describe the overall effectiveness of the leadership team in supporting employees?',
        options: [
            { label: 'Highly effective, strong focus on employee well-being and development.' },
            { label: 'Effective with room for improvement, communication gaps sometimes occur.' },
            { label: 'Somewhat effective, inconsistent support depending on the leader.' },
            { label: 'Not effective, lack of clear direction and guidance.' },
        ],
    },
    {
        id: 'alignmentWithValues',
        label: 'To what extent do employees feel aligned with the company\'s core values?',
        options: [
            { label: 'Strongly aligned, values are evident in everyday practices.' },
            { label: 'Moderately aligned, some inconsistencies between practice and values.' },
            { label: 'Not very aligned, values feel more like slogans than reality.' },
            { label: 'Not aligned at all, values do not reflect the actual company culture.' },
        ],
    },
];

export const departments = [
    { value: 'engineering', label: 'Engineering' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'sales', label: 'Sales' },
    { value: 'finance', label: 'Finance' },
    { value: 'human-resources', label: 'Human Resources' },
    { value: 'customer-support', label: 'Customer Support' },
    { value: 'research-and-development', label: 'Research and Development' },
    { value: 'product-management', label: 'Product Management' },
    { value: 'information-technology', label: 'Information Technology' },
    { value: 'operations', label: 'Operations' },
    { value: 'design', label: 'Design' },
    { value: 'quality-assurance', label: 'Quality Assurance' },
    { value: 'legal', label: 'Legal' },
    { value: 'supply-chain', label: 'Supply Chain' },
    { value: 'public-relations', label: 'Public Relations' },
    { value: 'business-development', label: 'Business Development' },
    { value: 'accounting', label: 'Accounting' },
    { value: 'event-management', label: 'Event Management' },
    { value: 'training-and-development', label: 'Training and Development' },
    { value: 'facilities-management', label: 'Facilities Management' },
    { value: 'communications', label: 'Communications' },
    { value: 'health-and-safety', label: 'Health and Safety' },
    { value: 'sales-operations', label: 'Sales Operations' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'market-research', label: 'Market Research' },
    { value: 'environmental-sustainability', label: 'Environmental Sustainability' },
    { value: 'partnerships', label: 'Partnerships' },
    { value: 'employee-wellness', label: 'Employee Wellness' },
    { value: 'logistics', label: 'Logistics' },
    { value: 'digital-strategy', label: 'Digital Strategy' },
    { value: 'internal-audit', label: 'Internal Audit' },
    // Add more departments as needed
];

export const organizationTypes = [
    { value: 'Non-profit', label: 'Non-profit' },
    { value: 'Government', label: 'Government' },
    { value: 'Private', label: 'Private' },
    { value: 'Public', label: 'Public' },
];

export const leadershipImprovementQuestions = [
    { value: 'Communication and clarity of vision', label: 'Communication and clarity of vision' },
    { value: 'Delegation and empowering team members', label: 'Delegation and empowering team members' },
    { value: 'Fostering collaboration and team dynamics', label: 'Fostering collaboration and team dynamics' },
    { value: 'Adapting to change and uncertainty', label: 'Adapting to change and uncertainty' },
  ];
  
  export const teamImprovementQuestions = [
    { value: 'Better communication tools and channels', label: 'Better communication tools and channels' },
    { value: 'More defined roles and responsibilities', label: 'More defined roles and responsibilities' },
    { value: 'Clearer team goals and priorities', label: 'Clearer team goals and priorities' },
    { value: 'Increased cross-functional collaboration', label: 'Increased cross-functional collaboration' },
  ];
  
  export const employeeMotivationObstaclesQuestions = [
    { value: 'Lack of recognition and appreciation', label: 'Lack of recognition and appreciation' },
    { value: 'Limited growth and development opportunities', label: 'Limited growth and development opportunities' },
    { value: 'Unclear connection to company goals', label: 'Unclear connection to company goals' },
    { value: 'Uninspiring work environment or culture', label: 'Uninspiring work environment or culture' },
  ];
  
  export const idealLeadershipQuestions = [
    { value: 'Inspiring and motivating others to achieve their best', label: 'Inspiring and motivating others to achieve their best' },
    { value: 'Building strong relationships and promoting teamwork', label: 'Building strong relationships and promoting teamwork' },
    { value: 'Making data-driven decisions and optimizing processes', label: 'Making data-driven decisions and optimizing processes' },
    { value: 'Adapting to change and leading through challenges', label: 'Adapting to change and leading through challenges' },
  ];
  
  export const dreamTeamEnvironmentQuestions = [
    { value: 'Open communication and trust among team members', label: 'Open communication and trust among team members' },
    { value: 'Clear roles and responsibilities with mutual support', label: 'Clear roles and responsibilities with mutual support' },
    { value: 'High level of collaboration and synergy', label: 'High level of collaboration and synergy' },
    { value: 'Creative problem-solving and innovative approaches', label: 'Creative problem-solving and innovative approaches' },
  ];
  
  export const aiImpactQuestions = [
    { value: 'Providing personalized leadership development plans', label: 'Providing personalized leadership development plans' },
    { value: 'Recommending team-building activities and exercises', label: 'Recommending team-building activities and exercises' },
    { value: 'Identifying areas for process improvement and optimization', label: 'Identifying areas for process improvement and optimization' },
    { value: 'Analyzing data to track progress and measure impact', label: 'Analyzing data to track progress and measure impact' },
  ];
  

  export const decisionMakingQuestions = [
    { value: 'Through well-defined hierarchies, with final decisions resting with leadership.', label: 'Through well-defined hierarchies, with final decisions resting with leadership.' },
    { value: 'Through collaborative discussions and consensus among team members.', label: 'Through collaborative discussions and consensus among team members.' },
    { value: 'By empowered teams with the authority to make independent decisions.', label: 'By empowered teams with the authority to make independent decisions.' },
    { value: 'Adaptively, with agility and responsiveness to changing circumstances.', label: 'Adaptively, with agility and responsiveness to changing circumstances.' },
  ];
  
  export const communicationChannelsQuestions = [
    { value: 'Formal channels like emails, reports, and presentations.', label: 'Formal channels like emails, reports, and presentations.' },
    { value: 'Open and informal communication, with frequent discussions and brainstorming.', label: 'Open and informal communication, with frequent discussions and brainstorming.' },
    { value: 'Data-driven communication, focusing on analytics and evidence-based decision-making.', label: 'Data-driven communication, focusing on analytics and evidence-based decision-making.' },
    { value: 'A flexible mix of formal and informal communication, depending on the context.', label: 'A flexible mix of formal and informal communication, depending on the context.' },
  ];
  
  export const workStylesQuestions = [
    { value: 'Fast-paced and demanding, with high performance standards.', label: 'Fast-paced and demanding, with high performance standards.' },
    { value: 'Flexible and results-oriented, with emphasis on work-life balance and individual goals.', label: 'Flexible and results-oriented, with emphasis on work-life balance and individual goals.' },
    { value: 'Structured and process-driven, prioritizing accuracy and efficiency.', label: 'Structured and process-driven, prioritizing accuracy and efficiency.' },
    { value: 'Creative and innovative, encouraging experimentation and pushing boundaries.', label: 'Creative and innovative, encouraging experimentation and pushing boundaries.' },
  ];
  
  export const teamDynamicsQuestions = [
    { value: 'Individualistic, with a focus on individual contributions and expertise.', label: 'Individualistic, with a focus on individual contributions and expertise.' },
    { value: 'Collaborative and team-oriented, with shared goals and mutual support.', label: 'Collaborative and team-oriented, with shared goals and mutual support.' },
    { value: 'Competitive, with clear performance metrics and incentives for achieving results.', label: 'Competitive, with clear performance metrics and incentives for achieving results.' },
    { value: 'Supportive and encouraging, fostering trust, respect, and open communication.', label: 'Supportive and encouraging, fostering trust, respect, and open communication.' },
  ];
  
  export const recognitionRewardsQuestions = [
    { value: 'Primarily through formal performance reviews and bonus structures.', label: 'Primarily through formal performance reviews and bonus structures.' },
    { value: 'Through public recognition, celebrations, and peer-to-peer appreciation.', label: 'Through public recognition, celebrations, and peer-to-peer appreciation.' },
    { value: 'Through opportunities for growth and development, learning new skills and taking on new challenges.', label: 'Through opportunities for growth and development, learning new skills and taking on new challenges.' },
    { value: 'Through a combination of formal and informal methods, tailored to individual preferences.', label: 'Through a combination of formal and informal methods, tailored to individual preferences.' },
  ];
  
  export const conflictResolutionQuestions = [
    { value: 'Through a formal process with defined communication channels and mediation steps.', label: 'Through a formal process with defined communication channels and mediation steps.' },
    { value: 'Through open and honest dialogue, prioritizing understanding and finding common ground.', label: 'Through open and honest dialogue, prioritizing understanding and finding common ground.' },
    { value: 'By focusing on collaborative problem-solving and seeking solutions that benefit all parties.', label: 'By focusing on collaborative problem-solving and seeking solutions that benefit all parties.' },
    { value: 'Depending on the severity and context, with flexibility and adaptation to the situation.', label: 'Depending on the severity and context, with flexibility and adaptation to the situation.' },
  ];
  export const profileTypes=[
    {value:'Skills and Competencies',label:'Skills and Competencies'},
    {value:'Strengths and Weaknesses',label:'Strengths and Weaknesses'},
    {value:'Career Goals',label:'Career Goals'},
    {value:'Work Preferences',label:'Work Preferences'},
    {value:'Values and Motivations',label:'Values and Motivations'},
    {value:'Learning and Development Needs',label:'Learning and Development Needs'},
    {value:'Team Collaboration Style',label:'Team Collaboration Style'},
    {value:'Diversity and Inclusion Preferences',label:'Diversity and Inclusion Preferences'},
    {value:'Project Preferences',label:'Project Preferences'},
    {value:'Feedback and Recognition Preferences',label:'Feedback and Recognition Preferences'},
    {value:'Communication Skills',label:'Communication Skills'}
  ]
  export const surveyTypes=[
    {value:'Anonymous Survey', label:'Anonymous Survey'},
    {value:'Identified survey', label:'Identified survey'}
  ]
  export const newsurveyRoles=[
    {value:'Employee Engagement',label:'Employee Engagement'},
    {value:'Employee Satisfaction',label:'Employee Satisfaction'},
    {value:'Performance Feedback',label:'Performance Feedback'},
    {value:'Employee Onboarding',label:'Employee Onboarding'},
    {value:' Exit Interview',label:' Exit Interview'},
    {value:'Employee Culture',label:'Employee Culture'},
    {value:'Pulse Surveys',label:'Pulse Surveys'},
    {value:'Training Needs Assessment',label:'Training Needs Assessment'},
    {value:'Diversity and Inclusion',label:'Diversity and Inclusion'},
    {value:'Employee Wellness',label:'Employee Wellness'},
  ]
  export const teamExperiences=[
    "Learning",
   " Entertainment",
    "Family-Friendly",
   " Food & Drink",
    "Sports",
    "Get Outside",
    "Wellness",
    "In-Home",
   " Travel",
   " Camping",
   "Book Club",
   "Volunteer Challenges"

  ]
  export const rewards=[
    "Peer-to-peer recognition",
    "Managerial recognition",
    "Milestone Rewards",
    "Anniversary celebrations",
    "Birthday celebrations",
    "Sales Incentives",
    "Referral Incentives",
    "Wellbeing Gifts",
    "Onboarding Gifts",
    "Marriage & Wedding Celebrations"
  ]