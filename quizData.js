const quizData = {
    4: {
        title: 'Chapter 4: Chemoreception in Organisms',
        questions: [
            {
                question: "Which plant hormone was discovered by F. W. Went from the coleoptile of oats?",
                options: ["Gibberellin", "Auxin", "Cytokinin", "Ethylene"],
                correctAnswer: "Auxin"
            },
            {
                question: "What is the primary function of auxin in response to light?",
                options: ["Move towards light", "Stay evenly distributed", "Stay away from light", "Break down in light"],
                correctAnswer: "Stay away from light"
            },
            {
                question: "Which plant hormone is responsible for breaking seed dormancy?",
                options: ["Abscisic acid", "Auxins", "Gibberellins", "Cytokinins"],
                correctAnswer: "Gibberellins"
            },
            {
                question: "Ethylene plays a major role in which process?",
                options: ["Cell division", "Increasing stem length", "Ripening of fruits", "Maintaining seed dormancy"],
                correctAnswer: "Ripening of fruits"
            },
            {
                question: "Which hormone inhibits the growth of plant parts and promotes abscission of mature leaves and fruits?",
                options: ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid (ABA)"],
                correctAnswer: "Abscisic acid (ABA)"
            },
            {
                question: "Synthetic auxins like 2,4-D are commonly used as:",
                options: ["Fertilizers", "Weedicides", "Fruit ripeners", "Growth inhibitors"],
                correctAnswer: "Weedicides"
            },
            {
                question: "The response of plants to the length of day and night is known as:",
                options: ["Photosynthesis", "Phototropism", "Photoperiodism", "Photorespiration"],
                correctAnswer: "Photoperiodism"
            },
            {
                question: "Which light-sensitive pigment plays a major role in photoperiodism?",
                options: ["Chlorophyll", "Phytochrome", "Carotene", "Xanthophyll"],
                correctAnswer: "Phytochrome"
            },
            {
                question: "Which cells in the thyroid gland produce thyroxine?",
                options: ["Parafollicular cells", "Alpha cells", "Beta cells", "Follicular cells"],
                correctAnswer: "Follicular cells"
            },
            {
                question: "Calcitonin, produced by the thyroid gland, has what function?",
                options: ["Increases calcium level in blood", "Reduces the level of calcium in blood", "Regulates glucose levels", "Controls metabolism"],
                correctAnswer: "Reduces the level of calcium in blood"
            },
            {
                question: "A condition caused by excessive secretion of thyroxine is called:",
                options: ["Goitre", "Hypothyroidism", "Hyperthyroidism", "Diabetes"],
                correctAnswer: "Hyperthyroidism"
            },
            {
                question: "Deficiency of which element can lead to Goitre?",
                options: ["Calcium", "Iron", "Iodine", "Sodium"],
                correctAnswer: "Iodine"
            },
            {
                question: "Which hormone works in opposition to calcitonin to regulate blood calcium levels?",
                options: ["Thyroxine", "Insulin", "Parathormone", "Glucagon"],
                correctAnswer: "Parathormone"
            },
            {
                question: "The normal fasting blood glucose (FBS) level in healthy individuals is:",
                options: ["120-140 mg/dL", "70-100 mg/dL", "150-180 mg/dL", "Below 60 mg/dL"],
                correctAnswer: "70-100 mg/dL"
            },
            {
                question: "Which cells in the Islets of Langerhans produce insulin?",
                options: ["Alpha cells", "Beta cells", "Follicular cells", "Delta cells"],
                correctAnswer: "Beta cells"
            },
            {
                question: "What is the primary action of insulin?",
                options: ["Increase blood glucose", "Convert glycogen to glucose", "Speeds up the entry of glucose into cells", "Breaks down fats"],
                correctAnswer: "Speeds up the entry of glucose into cells"
            },
            {
                question: "Glucagon, produced by alpha cells, acts to:",
                options: ["Decrease blood glucose", "Increase blood glucose", "Promote glucose uptake by cells", "Stimulate insulin release"],
                correctAnswer: "Increase blood glucose"
            },
            {
                question: "Type -1 diabetes is a condition where:",
                options: ["The body is resistant to insulin", "Insulin production is excessive", "Insulin production capacity is lost", "Glucose is not absorbed"],
                correctAnswer: "Insulin production capacity is lost"
            },
            {
                question: "The inner part of the adrenal gland is called the:",
                options: ["Cortex", "Medulla", "Pelvis", "Capsule"],
                correctAnswer: "Medulla"
            },
            {
                question: "Which hormone is NOT secreted by the adrenal medulla during an emergency?",
                options: ["Epinephrine", "Norepinephrine", "Cortisol", "Both A and B are correct"],
                correctAnswer: "Cortisol"
            },
            {
                question: "Hormones like glucocorticoids and mineralocorticoids are generally known as:",
                options: ["Androgens", "Estrogens", "Corticosteroids", "Progestins"],
                correctAnswer: "Corticosteroids"
            },
            {
                question: "Which hormone produced by the adrenal cortex maintains glucose homeostasis and suppresses immune responses?",
                options: ["Aldosterone", "Androgens", "Cortisol", "Epinephrine"],
                correctAnswer: "Cortisol"
            },
            {
                question: "The pineal gland produces which hormone that influences sleep and wakefulness?",
                options: ["Serotonin", "Dopamine", "Melatonin", "Oxytocin"],
                correctAnswer: "Melatonin"
            },
            {
                question: "The pineal gland is also known as the:",
                options: ["Master clock", "Biological clock", "Adrenal clock", "Metabolic clock"],
                correctAnswer: "Biological clock"
            },
            {
                question: "The thymus gland, located behind the sternum, helps in the maturation of:",
                options: ["B lymphocytes", "Red blood cells", "T lymphocytes", "Platelets"],
                correctAnswer: "T lymphocytes"
            },
            {
                question: "Which part of the brain is considered the 'master controller' of hormone production?",
                options: ["Cerebellum", "Pituitary gland", "Thalamus", "Hypothalamus"],
                correctAnswer: "Hypothalamus"
            },
            {
                question: "Somatotropin (Growth Hormone) is produced by which lobe of the pituitary gland?",
                options: ["Anterior lobe", "Posterior lobe", "Intermediate lobe", "Both lobes"],
                correctAnswer: "Anterior lobe"
            },
            {
                question: "Gigantism is caused by:",
                options: ["Decreased somatotropin during growth phase", "Increased somatotropin during growth phase", "Increased somatotropin after growth phase", "Decreased somatotropin after growth phase"],
                correctAnswer: "Increased somatotropin during growth phase"
            },
            {
                question: "Acromegaly results from excessive production of somatotropin...",
                options: ["during childhood.", "during the growth phase.", "after the growth phase.", "before birth."],
                correctAnswer: "after the growth phase."
            },
            {
                question: "Vasopressin, or ADH, is stored in and released from the:",
                options: ["Anterior pituitary", "Hypothalamus", "Posterior pituitary", "Adrenal gland"],
                correctAnswer: "Posterior pituitary"
            },
            {
                question: "The primary function of Antidiuretic Hormone (ADH) is to:",
                options: ["Increase urine production", "Speed up water reabsorption in the kidney", "Decrease blood pressure", "Increase salt excretion"],
                correctAnswer: "Speed up water reabsorption in the kidney"
            },
            {
                question: "Which hormone is primarily responsible for sperm production and secondary sexual characteristics in males?",
                options: ["Estrogen", "Progesterone", "Testosterone", "Prolactin"],
                correctAnswer: "Testosterone"
            },
            {
                question: "Which hormone is known as the 'hunger hormone'?",
                options: ["Leptin", "Insulin", "Ghrelin", "Cortisol"],
                correctAnswer: "Ghrelin"
            },
            {
                question: "Leptin, the 'satiety hormone', is produced by:",
                options: ["Stomach lining", "Adipose tissue", "Pancreas", "Liver"],
                correctAnswer: "Adipose tissue"
            },
            {
                question: "Chemical substances secreted by organisms to their surroundings for communication with the same species are called:",
                options: ["Hormones", "Enzymes", "Pheromones", "Neurotransmitters"],
                correctAnswer: "Pheromones"
            },
            {
                question: "Which type of pheromone is used by ants for trail marking?",
                options: ["Sex pheromone", "Alarm pheromone", "Trail pheromone", "Aggregation pheromone"],
                correctAnswer: "Trail pheromone"
            },
            {
                question: "Which hormone stimulates the formation of flowers and fruits?",
                options: ["Gibberellins", "Ethylene", "Abscisic acid", "Auxins"],
                correctAnswer: "Auxins"
            },
            {
                question: "Cytokinins are known to:",
                options: ["Inhibit lateral bud growth", "Promote ageing of leaves", "Delay senescence and retain green colour", "Induce root formation"],
                correctAnswer: "Delay senescence and retain green colour"
            },
            {
                question: "A cell in which a hormone acts is called the:",
                options: ["Source cell", "Target cell", "Receptor cell", "Gland cell"],
                correctAnswer: "Target cell"
            },
            {
                question: "In animals, how do hormones typically reach their target cells?",
                options: ["Through nerve fibres", "Through xylem and phloem", "Through blood", "Through direct cell contact"],
                correctAnswer: "Through blood"
            },
            {
                question: "Which hormone helps in maintaining the foetus in the uterus?",
                options: ["Estrogen", "Prolactin", "Oxytocin", "Progesterone"],
                correctAnswer: "Progesterone"
            },
            {
                question: "Oxytocin and prolactin are primarily associated with:",
                options: ["Digestion", "Growth", "Reproduction and birth", "Sleep cycle"],
                correctAnswer: "Reproduction and birth"
            },
            {
                question: "What is the function of Aldosterone from the adrenal cortex?",
                options: ["Controls sexual development", "Maintains glucose homeostasis", "Regulates blood pressure", "Suppresses immune responses"],
                correctAnswer: "Regulates blood pressure"
            },
            {
                question: "Releasing and inhibitory hormones are produced by the:",
                options: ["Anterior pituitary", "Posterior pituitary", "Hypothalamus", "Thyroid gland"],
                correctAnswer: "Hypothalamus"
            },
            {
                question: "TSH (Thyroid-Stimulating Hormone) from the pituitary gland stimulates the:",
                options: ["Adrenal gland", "Thyroid gland", "Pancreas", "Ovaries"],
                correctAnswer: "Thyroid gland"
            },
            {
                question: "Which hormone produced by the pituitary stimulates the adrenal cortex?",
                options: ["TSH", "GTH", "ACTH", "ADH"],
                correctAnswer: "ACTH"
            },
            {
                question: "What is the normal level of calcium in blood?",
                options: ["9-11 mg/dL", "70-100 mg/dL", "1-2 mg/dL", "20-25 mg/dL"],
                correctAnswer: "9-11 mg/dL"
            },
            {
                question: "During summer, what happens to the production of vasopressin (ADH)?",
                options: ["It decreases", "It stops", "It increases", "It remains unchanged"],
                correctAnswer: "It increases"
            },
            {
                question: "What is the function of synthetic gibberellins in agriculture?",
                options: ["Induce root formation", "Kill weeds", "Increase the size of fruits in grapevines", "Ripen fruits uniformly"],
                correctAnswer: "Increase the size of fruits in grapevines"
            },
            {
                question: "Neurotransmitters like dopamine and serotonin can also function as:",
                options: ["Pheromones", "Enzymes", "Hormones", "Antigens"],
                correctAnswer: "Hormones"
            },
            {
                question: "Which of these is NOT a function of Thyroxine?",
                options: ["Controls metabolism", "Reduces the level of calcium in blood", "Helps in brain development in babies", "Maintains health of the skin"],
                correctAnswer: "Reduces the level of calcium in blood"
            }
        ]
    },
    5: {
        title: 'Chapter 5: Immunity and Healthcare',
        questions: [
            {
                question: "According to the World Health Organisation, health is a complete state of physical, mental and ____ well being.",
                options: ["financial", "emotional", "social", "educational"],
                correctAnswer: "social"
            },
            {
                question: "Any substance, including pathogens, that enters the body and causes disease is called a(n):",
                options: ["Antibody", "Antigen", "Antibiotic", "Antidote"],
                correctAnswer: "Antigen"
            },
            {
                question: "The natural immune mechanism that exists in the body by birth is called:",
                options: ["Acquired immunity", "Artificial immunity", "Specific immunity", "Innate immunity"],
                correctAnswer: "Innate immunity"
            },
            {
                question: "Which enzyme present in saliva and tears can destroy bacteria?",
                options: ["Amylase", "Pepsin", "Lysozyme", "Trypsin"],
                correctAnswer: "Lysozyme"
            },
            {
                question: "HCl in the stomach is part of which level of immunity?",
                options: ["Primary level immunity", "Secondary level immunity", "Acquired immunity", "Specific immunity"],
                correctAnswer: "Primary level immunity"
            },
            {
                question: "Which white blood cell engulfs and destroys bacteria and produces chemicals against pathogens?",
                options: ["Eosinophil", "Basophil", "Neutrophil", "Lymphocyte"],
                correctAnswer: "Neutrophil"
            },
            {
                question: "Which cell produces heparin (prevents blood clotting) and histamine (causes inflammation)?",
                options: ["Monocyte", "Basophil", "Neutrophil", "Eosinophil"],
                correctAnswer: "Basophil"
            },
            {
                question: "The process by which white blood cells engulf and destroy pathogens is called:",
                options: ["Inflammation", "Phagocytosis", "Coagulation", "Vaccination"],
                correctAnswer: "Phagocytosis"
            },
            {
                question: "Neutrophils and monocytes are types of:",
                options: ["Phagocytes", "Lymphocytes", "Red blood cells", "Platelets"],
                correctAnswer: "Phagocytes"
            },
            {
                question: "The process by which blood flow increases to an injured area to bring white blood cells is:",
                options: ["Fever", "Phagocytosis", "Inflammatory response", "Wound healing"],
                correctAnswer: "Inflammatory response"
            },
            {
                question: "What are the chemical substances released by white blood cells that trigger the brain to raise body temperature?",
                options: ["Pyrogens", "Histamines", "Antigens", "Antibodies"],
                correctAnswer: "Pyrogens"
            },
            {
                question: "Which enzyme is produced by platelets and damaged tissues to initiate blood clotting?",
                options: ["Thrombin", "Fibrinogen", "Thromboplastin", "Prothrombin"],
                correctAnswer: "Thromboplastin"
            },
            {
                question: "Thrombin converts an inactive protein called ____ into fibrin.",
                options: ["Prothrombin", "Fibrinogen", "Heparin", "Histamine"],
                correctAnswer: "Fibrinogen"
            },
            {
                question: "Immunity that develops after birth and specifically recognizes antigens is called:",
                options: ["Innate immunity", "Non-specific immunity", "Acquired immunity", "Primary immunity"],
                correctAnswer: "Acquired immunity"
            },
            {
                question: "Which type of lymphocyte matures in the bone marrow?",
                options: ["T lymphocytes", "B lymphocytes", "Both T and B", "Neither T nor B"],
                correctAnswer: "B lymphocytes"
            },
            {
                question: "What is the primary function of B lymphocytes?",
                options: ["Destroy infected cells", "Produce antibodies", "Engulf pathogens", "Mature in the thymus"],
                correctAnswer: "Produce antibodies"
            },
            {
                question: "T lymphocytes mature in which gland?",
                options: ["Thyroid", "Thymus", "Adrenal", "Pituitary"],
                correctAnswer: "Thymus"
            },
            {
                question: "The immunity acquired through immunisation (vaccination) is called:",
                options: ["Natural immunity", "Innate immunity", "Passive immunity", "Artificial immunity"],
                correctAnswer: "Artificial immunity"
            },
            {
                question: "Who is known as the father of vaccination?",
                options: ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Edward Jenner"],
                correctAnswer: "Edward Jenner"
            },
            {
                question: "The OPV (Oral Polio Vaccine) contains which type of pathogens?",
                options: ["Neutralised pathogens", "Dead pathogens", "Parts of pathogens", "Genetic material of pathogen"],
                correctAnswer: "Dead pathogens"
            },
            {
                question: "Tuberculosis is caused by which type of microorganism?",
                options: ["Virus", "Fungus", "Bacteria", "Protozoa"],
                correctAnswer: "Bacteria"
            },
            {
                question: "The pathogen for Rat fever (Leptospirosis) is:",
                options: ["A virus", "Leptospira (bacteria)", "A fungus", "A worm"],
                correctAnswer: "Leptospira (bacteria)"
            },
            {
                question: "The Human Immunodeficiency Virus (HIV) primarily attacks which cells?",
                options: ["B lymphocytes", "Neutrophils", "T lymphocytes", "Red blood cells"],
                correctAnswer: "T lymphocytes"
            },
            {
                question: "Nipah virus is primarily transmitted to humans from:",
                options: ["Mosquitoes", "Rats", "Fruit bats", "Pigs"],
                correctAnswer: "Fruit bats"
            },
            {
                question: "Ringworm is a disease caused by a:",
                options: ["Worm", "Virus", "Bacteria", "Fungus"],
                correctAnswer: "Fungus"
            },
            {
                question: "The pathogen for Malaria is:",
                options: ["A virus", "A bacteria", "Plasmodium (protozoan)", "A fungus"],
                correctAnswer: "Plasmodium (protozoan)"
            },
            {
                question: "Which mosquito transmits Malaria?",
                options: ["Aedes", "Culex", "Female Anopheles", "Male Anopheles"],
                correctAnswer: "Female Anopheles"
            },
            {
                question: "Filariasis is caused by filarial worms lodging in the:",
                options: ["Blood vessels", "Lungs", "Lymphatic vessels", "Intestines"],
                correctAnswer: "Lymphatic vessels"
            },
            {
                question: "The MMR vaccine provides protection against:",
                options: ["Malaria, Mumps, Rabies", "Measles, Mumps, Rubella", "Meningitis, Mumps, Rabies", "Measles, Malaria, Rubella"],
                correctAnswer: "Measles, Mumps, Rubella"
            },
            {
                question: "Which of the following is NOT a method of disease prevention?",
                options: ["Vaccination", "Proper sanitation", "Regular exercise", "Self-medication"],
                correctAnswer: "Self-medication"
            },
            {
                question: "The process of heating milk to kill harmful bacteria is called:",
                options: ["Pasteurization", "Sterilization", "Fermentation", "Homogenization"],
                correctAnswer: "Pasteurization"
            },
            {
                question: "Which of the following is a vector-borne disease?",
                options: ["Tuberculosis", "Cholera", "Malaria", "Tetanus"],
                correctAnswer: "Malaria"
            },
            {
                question: "The BCG vaccine is used to prevent:",
                options: ["Tuberculosis", "Cholera", "Hepatitis B", "Tetanus"],
                correctAnswer: "Tuberculosis"
            },
            {
                question: "Which of the following diseases is caused by a virus?",
                options: ["Tuberculosis", "Cholera", "Influenza", "Typhoid"],
                correctAnswer: "Influenza"
            },
            {
                question: "The disease that spreads through contaminated water is:",
                options: ["Tuberculosis", "Malaria", "Cholera", "AIDS"],
                correctAnswer: "Cholera"
            },
            {
                question: "Which of the following is a bacterial disease?",
                options: ["Common cold", "Influenza", "Tuberculosis", "Malaria"],
                correctAnswer: "Tuberculosis"
            },
            {
                question: "The disease that spreads through the bite of a female Anopheles mosquito is:",
                options: ["Dengue", "Malaria", "Yellow fever", "Chikungunya"],
                correctAnswer: "Malaria"
            },
            {
                question: "The disease caused by a protozoan is:",
                options: ["Malaria", "Tuberculosis", "AIDS", "Cholera"],
                correctAnswer: "Malaria"
            },
            {
                question: "Which of the following is a water-borne disease?",
                options: ["Malaria", "Tuberculosis", "Hepatitis A", "Tetanus"],
                correctAnswer: "Hepatitis A"
            },
            {
                question: "The OPV (Oral Polio Vaccine) contains which type of pathogens?",
                options: ["Neutralised pathogens", "Dead pathogens", "Parts of pathogens", "Genetic material of pathogen"],
                correctAnswer: "Dead pathogens"
            },
            {
                question: "The pathogen for Rat fever (Leptospirosis) is:",
                options: ["A virus", "Leptospira (bacteria)", "A fungus", "A worm"],
                correctAnswer: "Leptospira (bacteria)"
            },
            {
                question: "The Human Immunodeficiency Virus (HIV) primarily attacks which cells?",
                options: ["B lymphocytes", "Neutrophils", "T lymphocytes", "Red blood cells"],
                correctAnswer: "T lymphocytes"
            },
            {
                question: "Nipah virus is primarily transmitted to humans from:",
                options: ["Mosquitoes", "Rats", "Fruit bats", "Pigs"],
                correctAnswer: "Fruit bats"
            },
            {
                question: "Ringworm is a disease caused by a:",
                options: ["Worm", "Virus", "Bacteria", "Fungus"],
                correctAnswer: "Fungus"
            }
        ]
    }
};
