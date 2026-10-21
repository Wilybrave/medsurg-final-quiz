// Med-Surg final practice bank: electrolyte imbalances (signs & symptoms), crystalloids vs colloids, mannitol, albumin.
// Each option is [text, why]. ans = indexes of correct options (more than one = select all that apply).
// Written from standard ATI RN Med-Surg / Pharm content. Reference ranges use ATI values.
window.BANK = {
  title: "Med-Surg Final: Fluids & Electrolytes",
  sub: "Electrolyte imbalance signs & symptoms · crystalloids & colloids · mannitol · albumin",
  qs: [
  // =====================================================================
  // SODIUM  (expected 136–145 mEq/L)
  // =====================================================================
  { topic: "Sodium",
    q: "What is the expected reference range for serum sodium?",
    opts: [
      ["136–145 mEq/L", "Correct. Below 136 is hyponatremia; above 145 is hypernatremia."],
      ["3.5–5.0 mEq/L", "That is the potassium range."],
      ["9.0–10.5 mg/dL", "That is the total calcium range."],
      ["1.3–2.1 mEq/L", "That is the magnesium range."]
    ], ans: [0] },

  { topic: "Sodium",
    q: "A client has a serum sodium of 126 mEq/L. Which findings should the nurse expect? Select all that apply.",
    opts: [
      ["Headache and confusion", "Correct. Low sodium lets water move into brain cells, so cerebral swelling causes headache, confusion and lethargy."],
      ["Muscle weakness", "Correct. Hyponatremia causes generalized muscle weakness and decreased deep tendon reflexes."],
      ["Nausea, vomiting and abdominal cramping", "Correct. GI upset and hyperactive bowel sounds are common with hyponatremia."],
      ["Intense thirst with dry, sticky mucous membranes", "That points to HYPERnatremia (water deficit), not hyponatremia."],
      ["Seizures when sodium keeps falling", "Correct. Severe hyponatremia (especially below about 120) can cause seizures and coma. Put the client on seizure precautions."]
    ], ans: [0,1,2,4] },

  { topic: "Sodium",
    q: "Which client is at greatest risk for hyponatremia?",
    opts: [
      ["A client with syndrome of inappropriate antidiuretic hormone (SIADH)", "Correct. Too much ADH makes the kidneys hold water, which dilutes the sodium."],
      ["A client with diabetes insipidus", "Diabetes insipidus causes loss of large amounts of dilute urine, which leads to HYPERnatremia."],
      ["A client receiving hypertonic tube feedings with no water flushes", "Hypertonic feedings without free water cause HYPERnatremia."],
      ["A client who cannot get to water because of a stroke", "Water deprivation concentrates the blood and causes HYPERnatremia."]
    ], ans: [0] },

  { topic: "Sodium",
    q: "A client with SIADH has a sodium of 128 mEq/L but no neurologic symptoms. Which intervention does the nurse anticipate first?",
    opts: [
      ["Restrict fluid intake", "Correct. With SIADH the problem is too much water. Fluid restriction lets the sodium come back up."],
      ["Infuse 0.45% sodium chloride", "Hypotonic fluid adds free water and makes hyponatremia worse."],
      ["Encourage 3 L of water a day", "More water dilutes the sodium even further."],
      ["Give D5W at 125 mL/hr", "D5W acts like free water once the dextrose is used, so it worsens hyponatremia."]
    ], ans: [0] },

  { topic: "Sodium",
    q: "A client with severe hyponatremia and confusion is receiving 3% sodium chloride. What is the nurse's priority while it infuses?",
    opts: [
      ["Infuse slowly on a pump and check serum sodium often", "Correct. Correcting sodium too fast can cause osmotic demyelination (brain damage). Hypertonic saline also risks fluid overload."],
      ["Give it as a rapid bolus to raise sodium quickly", "Raising sodium too fast is dangerous. It can cause osmotic demyelination syndrome."],
      ["Encourage oral water intake during the infusion", "Free water works against the goal of raising sodium."],
      ["Run it through the same line as a blood transfusion", "Only 0.9% sodium chloride is given with blood. Hypertonic saline needs its own carefully monitored line."]
    ], ans: [0] },

  { topic: "Sodium",
    q: "A client has a serum sodium of 152 mEq/L. Which findings should the nurse expect? Select all that apply.",
    opts: [
      ["Thirst", "Correct. Thirst is often the first sign of hypernatremia."],
      ["Dry, sticky mucous membranes and flushed skin", "Correct. Water deficit dries out the tissues."],
      ["Restlessness, agitation and confusion", "Correct. High sodium pulls water out of brain cells, so they shrink and irritability and confusion follow."],
      ["Muscle twitching and hyperreflexia", "Correct. Early hypernatremia causes neuromuscular irritability. If it gets severe, reflexes drop and weakness follows."],
      ["Positive Chvostek's sign", "Chvostek's sign goes with hypocalcemia or hypomagnesemia, not high sodium."]
    ], ans: [0,1,2,3] },

  { topic: "Sodium",
    q: "Which IV fluid does the nurse expect for a client with hypernatremia caused by water loss?",
    opts: [
      ["0.45% sodium chloride", "Correct. Hypotonic fluid replaces free water and moves water back into the dehydrated cells. Give it gradually."],
      ["3% sodium chloride", "Hypertonic saline would raise the sodium even higher."],
      ["Lactated Ringer's", "LR is isotonic and contains sodium. It does not correct a free-water deficit well."],
      ["25% albumin", "Albumin is a colloid that pulls fluid into the vessels. It does not replace free water inside the cells."]
    ], ans: [0] },

  { topic: "Sodium",
    q: "A nurse is teaching a client with hyponatremia from diuretics. Which foods are high in sodium? Select all that apply.",
    opts: [
      ["Canned soup", "Correct. Canned foods are very high in sodium."],
      ["Processed cheese", "Correct. Processed cheese is high in sodium."],
      ["Deli meats and hot dogs", "Correct. Processed meats are high in sodium."],
      ["Fresh apples", "Fresh fruit is low in sodium."],
      ["Soy sauce", "Correct. Soy sauce is one of the highest-sodium condiments."]
    ], ans: [0,1,2,4] },

  { topic: "Sodium",
    q: "Which finding is the earliest and most important to report in a client whose sodium is dropping?",
    opts: [
      ["A change in level of consciousness", "Correct. Neurologic changes (confusion, lethargy) are the key warning signs of hyponatremia and can lead to seizures."],
      ["Mild thirst", "Thirst goes with hypernatremia, and it is not a priority finding."],
      ["Constipation", "Hyponatremia more often causes hyperactive bowel sounds and cramping. Either way, constipation is not the priority."],
      ["Tall, peaked T waves", "Peaked T waves go with hyperkalemia."]
    ], ans: [0] },

  { topic: "Sodium",
    q: "A client with hypernatremia is receiving IV fluids. Which finding shows the treatment is working?",
    opts: [
      ["Moist mucous membranes and improved orientation", "Correct. Restored hydration and clearer mental status mean water is moving back into the cells."],
      ["Urine specific gravity of 1.035", "That is highly concentrated urine. It means the client is still dehydrated."],
      ["Sodium rising from 150 to 154 mEq/L", "Sodium is going in the wrong direction."],
      ["New onset of hyperreflexia", "Hyperreflexia is a sign of the imbalance, not of improvement."]
    ], ans: [0] },

  // =====================================================================
  // POTASSIUM  (expected 3.5–5.0 mEq/L)
  // =====================================================================
  { topic: "Potassium",
    q: "A client taking furosemide has a potassium of 2.9 mEq/L. Which findings should the nurse expect? Select all that apply.",
    opts: [
      ["Muscle weakness and leg cramps", "Correct. Low potassium weakens skeletal muscle. Weakness often starts in the legs."],
      ["Decreased bowel sounds and constipation", "Correct. Smooth muscle slows down too, which can lead to paralytic ileus."],
      ["Flattened T waves and a U wave on the ECG", "Correct. These are the classic hypokalemia ECG changes, along with ST depression."],
      ["Tall, peaked T waves", "Peaked T waves go with HYPERkalemia."],
      ["Shallow, ineffective respirations", "Correct. Weak respiratory muscles can make breathing shallow. This is a serious finding."]
    ], ans: [0,1,2,4] },

  { topic: "Potassium",
    q: "Which ECG change does the nurse associate with hyperkalemia?",
    opts: [
      ["Tall, peaked T waves", "Correct. Peaked T waves are the earliest classic sign. They can progress to a wide QRS, a flat P wave and cardiac arrest."],
      ["Prominent U waves", "U waves go with HYPOkalemia."],
      ["Flattened or inverted T waves", "Flattened T waves go with HYPOkalemia."],
      ["Shortened QT interval", "A short QT goes with HYPERcalcemia."]
    ], ans: [0] },

  { topic: "Potassium",
    q: "Which client is at greatest risk for hyperkalemia?",
    opts: [
      ["A client with chronic kidney disease taking spironolactone", "Correct. Failing kidneys can't excrete potassium, and spironolactone is a potassium-sparing diuretic. Together they double the risk."],
      ["A client with continuous nasogastric suction", "NG suction removes potassium, which leads to HYPOkalemia."],
      ["A client with prolonged vomiting and diarrhea", "GI losses cause HYPOkalemia."],
      ["A client taking hydrochlorothiazide", "Thiazide diuretics waste potassium, which leads to HYPOkalemia."]
    ], ans: [0] },

  { topic: "Potassium",
    q: "A client has a potassium of 6.8 mEq/L with ECG changes. Which medication does the nurse expect to give FIRST to protect the heart?",
    opts: [
      ["Calcium gluconate IV", "Correct. Calcium stabilizes the heart muscle membrane within minutes. It does not lower potassium, but it buys time."],
      ["Sodium polystyrene sulfonate", "It removes potassium through the GI tract, but it takes hours. It is not the first drug when the ECG is changing."],
      ["Potassium chloride IV", "This would make hyperkalemia worse and could be fatal."],
      ["Spironolactone", "Spironolactone keeps potassium in the body and would make this worse."]
    ], ans: [0] },

  { topic: "Potassium",
    q: "Which treatments lower serum potassium in hyperkalemia? Select all that apply.",
    opts: [
      ["Regular insulin given with dextrose", "Correct. Insulin drives potassium into the cells. Dextrose is given with it to prevent hypoglycemia."],
      ["Albuterol by nebulizer", "Correct. Beta-2 agonists also shift potassium into the cells."],
      ["Sodium polystyrene sulfonate or patiromer", "Correct. These bind potassium in the gut so it leaves in the stool."],
      ["Hemodialysis", "Correct. Dialysis removes potassium, especially in kidney failure."],
      ["Lactated Ringer's bolus", "LR contains potassium. It does not treat hyperkalemia."]
    ], ans: [0,1,2,3] },

  { topic: "Potassium",
    q: "A nurse is preparing to give IV potassium chloride. Which actions are correct? Select all that apply.",
    opts: [
      ["Confirm urine output of at least 30 mL/hr first", "Correct. Potassium leaves through the kidneys. If the client isn't making urine, it can build up to dangerous levels."],
      ["Dilute it and infuse on a pump no faster than about 10 mEq/hr through a peripheral line", "Correct. Infusing it fast can cause fatal dysrhythmias. Always dilute it and use a pump."],
      ["Give it by IV push to correct the level quickly", "NEVER give potassium by IV push. It can cause cardiac arrest."],
      ["Check the IV site often for phlebitis and infiltration", "Correct. Potassium irritates veins and damages tissue if it infiltrates."],
      ["Use cardiac monitoring when the rate is higher or the client is high-risk", "Correct. Watch the ECG for rhythm changes during replacement."]
    ], ans: [0,1,3,4] },

  { topic: "Potassium",
    q: "A client with hypokalemia is also taking digoxin. Why is this combination a concern?",
    opts: [
      ["Low potassium increases the risk of digoxin toxicity", "Correct. Hypokalemia makes the heart more sensitive to digoxin. Watch for nausea, vision changes and dysrhythmias."],
      ["Low potassium makes digoxin ineffective", "The problem is toxicity, not loss of effect."],
      ["Digoxin raises potassium, so the effects cancel out", "Digoxin does not correct low potassium. The combination is dangerous."],
      ["There is no interaction", "This is one of the most tested drug–electrolyte interactions."]
    ], ans: [0] },

  { topic: "Potassium",
    q: "A client on a potassium-wasting diuretic asks which foods are high in potassium. Which should the nurse include? Select all that apply.",
    opts: [
      ["Bananas", "Correct. Bananas are high in potassium."],
      ["Baked potatoes", "Correct. Potatoes are among the highest-potassium foods."],
      ["Spinach and avocado", "Correct. Both are high in potassium."],
      ["White rice", "White rice is low in potassium."],
      ["Oranges and dried fruit (apricots, raisins)", "Correct. Both are good potassium sources."]
    ], ans: [0,1,2,4] },

  { topic: "Potassium",
    q: "A client's potassium comes back 6.2 mEq/L, but the client has no symptoms and a normal ECG. The lab notes the sample was hemolyzed. What should the nurse do?",
    opts: [
      ["Ask for a repeat sample", "Correct. Hemolyzed cells release potassium into the sample and cause a falsely high result. Confirm before treating."],
      ["Give calcium gluconate right away", "There is no ECG change and the result may be false. Confirm it first."],
      ["Start a potassium-restricted diet and no further action", "Don't act on a result that may be false. Recheck it."],
      ["Give potassium chloride", "Giving potassium to a client who may be hyperkalemic is dangerous."]
    ], ans: [0] },

  { topic: "Potassium",
    q: "Which findings go with HYPERkalemia? Select all that apply.",
    opts: [
      ["Muscle weakness that can progress to flaccid paralysis", "Correct. Weakness usually starts in the legs and moves upward."],
      ["Numbness and tingling (paresthesias)", "Correct. Early hyperkalemia causes muscle twitching and paresthesias."],
      ["Diarrhea and hyperactive bowel sounds", "Correct. High potassium speeds up GI smooth muscle."],
      ["Irregular, slow pulse that can lead to cardiac arrest", "Correct. The biggest danger is dysrhythmias and arrest."],
      ["Constipation and paralytic ileus", "Slowed bowels go with HYPOkalemia."]
    ], ans: [0,1,2,3] },

  { topic: "Potassium",
    q: "Which instruction is correct for a client taking oral potassium chloride?",
    opts: [
      ["Take it with food and a full glass of water", "Correct. Oral potassium irritates the stomach. Food and water protect the GI lining."],
      ["Take it on an empty stomach for best absorption", "It causes GI irritation and ulceration. Take it with food."],
      ["Crush extended-release tablets if hard to swallow", "Crushing extended-release forms releases it all at once and irritates the GI tract."],
      ["Use a salt substitute to boost your intake", "Most salt substitutes are potassium chloride. Adding them can push the client into hyperkalemia."]
    ], ans: [0] },

  { topic: "Potassium",
    q: "Which conditions shift potassium OUT of the cells and raise serum potassium? Select all that apply.",
    opts: [
      ["Metabolic acidosis (such as DKA)", "Correct. In acidosis, hydrogen ions enter the cells and push potassium out into the blood."],
      ["Crush injuries and burns", "Correct. Damaged cells release their potassium."],
      ["Insulin administration", "Insulin moves potassium INTO the cells and LOWERS serum potassium."],
      ["Adrenal insufficiency (Addison's disease)", "Correct. Without aldosterone, the kidneys hold onto potassium."],
      ["Metabolic alkalosis", "Alkalosis moves potassium INTO the cells and causes hypokalemia."]
    ], ans: [0,1,3] },

  // =====================================================================
  // CALCIUM  (expected 9.0–10.5 mg/dL)
  // =====================================================================
  { topic: "Calcium",
    q: "A client had a thyroidectomy yesterday and says their lips and fingertips are tingling. Which imbalance does the nurse suspect?",
    opts: [
      ["Hypocalcemia", "Correct. The parathyroid glands can be injured or removed during thyroid surgery. Low PTH means low calcium, and tingling is an early sign."],
      ["Hypercalcemia", "High calcium causes weakness and sluggish reflexes, not tingling."],
      ["Hypernatremia", "High sodium causes thirst and confusion, not perioral tingling."],
      ["Hyperkalemia", "Thyroid surgery doesn't cause hyperkalemia. Tingling around the lips is the classic low-calcium sign."]
    ], ans: [0] },

  { topic: "Calcium",
    q: "Which findings are expected with HYPOcalcemia? Select all that apply.",
    opts: [
      ["Positive Trousseau's sign (carpal spasm when a BP cuff is inflated)", "Correct. This is a classic sign of neuromuscular irritability."],
      ["Positive Chvostek's sign (facial twitch when the cheek is tapped)", "Correct. This also shows neuromuscular irritability."],
      ["Hyperactive deep tendon reflexes and muscle cramps", "Correct. Low calcium makes nerves fire too easily, which causes tetany."],
      ["Laryngospasm and seizures", "Correct. These are the life-threatening complications. Keep emergency airway equipment nearby."],
      ["Shortened QT interval", "Hypocalcemia PROLONGS the QT interval. A short QT goes with hypercalcemia."]
    ], ans: [0,1,2,3] },

  { topic: "Calcium",
    q: "Which ECG change goes with hypocalcemia?",
    opts: [
      ["Prolonged QT interval", "Correct. Low calcium prolongs the QT, which raises the risk of torsades de pointes."],
      ["Shortened QT interval", "A short QT goes with hypercalcemia."],
      ["Tall, peaked T waves", "Peaked T waves go with hyperkalemia."],
      ["Prominent U waves", "U waves go with hypokalemia."]
    ], ans: [0] },

  { topic: "Calcium",
    q: "Which findings are expected with HYPERcalcemia? Select all that apply.",
    opts: [
      ["Muscle weakness and decreased deep tendon reflexes", "Correct. High calcium sedates the nerves and muscles."],
      ["Constipation, nausea and vomiting", "Correct. GI motility slows down."],
      ["Kidney stones and flank pain", "Correct. Extra calcium is filtered by the kidneys and can form stones."],
      ["Lethargy and confusion", "Correct. Mental status changes can progress to coma."],
      ["Positive Trousseau's sign and tetany", "Those go with HYPOcalcemia."]
    ], ans: [0,1,2,3] },

  { topic: "Calcium",
    q: "Which client is at greatest risk for hypercalcemia?",
    opts: [
      ["A client with metastatic cancer who has been on bed rest for weeks", "Correct. Bone breakdown from cancer and from immobility releases calcium into the blood."],
      ["A client with acute pancreatitis", "Pancreatitis causes HYPOcalcemia, because calcium binds to fat in the damaged pancreas."],
      ["A client who received several units of blood", "The citrate preservative in stored blood binds calcium, which causes HYPOcalcemia."],
      ["A client with chronic kidney disease", "CKD usually causes high phosphorus and LOW calcium."]
    ], ans: [0] },

  { topic: "Calcium",
    q: "Which interventions does the nurse anticipate for a client with hypercalcemia? Select all that apply.",
    opts: [
      ["IV 0.9% sodium chloride", "Correct. Isotonic saline hydrates the client and helps the kidneys excrete calcium."],
      ["Furosemide after rehydration", "Correct. Loop diuretics increase calcium excretion."],
      ["Calcitonin or a bisphosphonate", "Correct. Both lower calcium by slowing bone breakdown."],
      ["Hydrochlorothiazide", "Thiazide diuretics make the kidneys keep calcium, so they worsen hypercalcemia."],
      ["Encourage mobility and weight-bearing as tolerated", "Correct. Weight-bearing slows calcium loss from bone."]
    ], ans: [0,1,2,4] },

  { topic: "Calcium",
    q: "A client with hypocalcemia is prescribed IV calcium gluconate. Which actions are correct? Select all that apply.",
    opts: [
      ["Infuse slowly", "Correct. Giving it too fast can cause hypotension, bradycardia and dysrhythmias."],
      ["Monitor the ECG during the infusion", "Correct. Calcium affects heart rhythm. Watch closely, especially in clients taking digoxin."],
      ["Check the IV site often for infiltration", "Correct. IV calcium causes tissue damage if it infiltrates."],
      ["Put the client on seizure precautions until calcium is normal", "Correct. Severe hypocalcemia can cause seizures."],
      ["Give it by rapid IV push to stop the tingling fast", "Rapid administration is dangerous. Give it slowly."]
    ], ans: [0,1,2,3] },

  { topic: "Calcium",
    q: "Which ECG change goes with hypercalcemia?",
    opts: [
      ["Shortened QT interval", "Correct. High calcium shortens the QT. It can also cause heart block and raises the risk of digoxin toxicity."],
      ["Prolonged QT interval", "A prolonged QT goes with HYPOcalcemia (and hypomagnesemia)."],
      ["Tall, peaked T waves", "Peaked T waves go with hyperkalemia."],
      ["Flattened T waves with U waves", "Those go with hypokalemia."]
    ], ans: [0] },

  { topic: "Calcium",
    q: "Which foods should the nurse recommend for a client who needs more calcium? Select all that apply.",
    opts: [
      ["Yogurt and milk", "Correct. Dairy is the richest calcium source."],
      ["Canned sardines or salmon with bones", "Correct. The soft bones are high in calcium."],
      ["Dark green vegetables like broccoli and kale", "Correct. These are good plant sources of calcium."],
      ["Fortified orange juice or cereal", "Correct. Fortified foods add calcium."],
      ["White bread", "White bread is not a significant calcium source."]
    ], ans: [0,1,2,3] },

  { topic: "Calcium",
    q: "Which client is at risk for hypocalcemia? Select all that apply.",
    opts: [
      ["A client with hypoparathyroidism", "Correct. Low PTH means low calcium."],
      ["A client with acute pancreatitis", "Correct. Calcium binds to the fat breakdown products in the inflamed pancreas."],
      ["A client who received a massive blood transfusion", "Correct. The citrate in stored blood binds calcium."],
      ["A client with vitamin D deficiency", "Correct. The body needs vitamin D to absorb calcium from food."],
      ["A client with hyperparathyroidism", "Too much PTH causes HYPERcalcemia."]
    ], ans: [0,1,2,3] },

  // =====================================================================
  // MAGNESIUM  (expected 1.3–2.1 mEq/L)
  // =====================================================================
  { topic: "Magnesium",
    q: "Which client is at greatest risk for hypomagnesemia?",
    opts: [
      ["A client with alcohol use disorder and poor nutrition", "Correct. Alcohol increases magnesium loss in the urine, and these clients usually take in very little."],
      ["A client with kidney failure", "Failing kidneys keep magnesium, which leads to HYPERmagnesemia."],
      ["A client who takes milk of magnesia every day", "Magnesium-containing laxatives and antacids cause HYPERmagnesemia."],
      ["A client receiving magnesium sulfate for preeclampsia", "The infusion puts the client at risk for HYPERmagnesemia."]
    ], ans: [0] },

  { topic: "Magnesium",
    q: "Which findings go with HYPOmagnesemia? Select all that apply.",
    opts: [
      ["Hyperactive deep tendon reflexes and tremors", "Correct. Low magnesium makes the nerves and muscles irritable."],
      ["Positive Chvostek's and Trousseau's signs", "Correct. Low magnesium looks a lot like low calcium. It often causes low calcium too."],
      ["Dysrhythmias such as torsades de pointes", "Correct. Low magnesium prolongs the QT and raises the risk of torsades."],
      ["Seizures", "Correct. Severe hypomagnesemia can cause seizures."],
      ["Flushing, warmth and absent reflexes", "Those go with HYPERmagnesemia."]
    ], ans: [0,1,2,3] },

  { topic: "Magnesium",
    q: "Which findings go with HYPERmagnesemia? Select all that apply.",
    opts: [
      ["Diminished or absent deep tendon reflexes", "Correct. High magnesium depresses the nerves and muscles."],
      ["Hypotension, flushing and a feeling of warmth", "Correct. Magnesium dilates blood vessels."],
      ["Bradycardia", "Correct. High magnesium slows conduction in the heart."],
      ["Respiratory depression", "Correct. This is the life-threatening complication. It can progress to respiratory and cardiac arrest."],
      ["Hyperreflexia and tremors", "Those go with HYPOmagnesemia."]
    ], ans: [0,1,2,3] },

  { topic: "Magnesium",
    q: "A client on a magnesium sulfate infusion has absent patellar reflexes and a respiratory rate of 10/min. What is the nurse's FIRST action?",
    opts: [
      ["Stop the magnesium infusion", "Correct. Stop the source first. Then notify the provider and have calcium gluconate (the antidote) ready."],
      ["Increase the infusion rate", "This would worsen magnesium toxicity."],
      ["Give potassium chloride", "Potassium does not reverse magnesium toxicity."],
      ["Document the findings and recheck in 1 hour", "Absent reflexes and slow breathing mean toxicity. Act now."]
    ], ans: [0] },

  { topic: "Magnesium",
    q: "What is the antidote for magnesium toxicity?",
    opts: [
      ["Calcium gluconate", "Correct. Calcium counters magnesium's effect on the heart and the neuromuscular junction."],
      ["Naloxone", "Naloxone reverses opioids."],
      ["Protamine sulfate", "Protamine reverses heparin."],
      ["Vitamin K", "Vitamin K reverses warfarin."]
    ], ans: [0] },

  { topic: "Magnesium",
    q: "A client is receiving IV magnesium sulfate to treat hypomagnesemia. Which assessment should the nurse check before and during the infusion?",
    opts: [
      ["Deep tendon reflexes", "Correct. Losing the patellar reflex is an early sign that magnesium is getting too high. Also check respirations and urine output."],
      ["Blood glucose", "Glucose isn't the key safety check for magnesium."],
      ["Pupil size", "Pupils aren't the key safety check for magnesium."],
      ["Capillary refill only", "Reflexes, respirations, BP and urine output are the key checks."]
    ], ans: [0] },

  { topic: "Magnesium",
    q: "A client's potassium keeps staying low despite replacement. Which lab should the nurse expect the provider to check?",
    opts: [
      ["Magnesium", "Correct. The kidneys keep losing potassium until low magnesium is corrected. Low potassium and low magnesium often occur together."],
      ["Sodium", "Low sodium doesn't block potassium replacement."],
      ["Albumin", "Albumin affects calcium readings, not potassium replacement."],
      ["Chloride", "Chloride isn't the usual reason potassium won't come up."]
    ], ans: [0] },

  { topic: "Magnesium",
    q: "Which foods are good sources of magnesium? Select all that apply.",
    opts: [
      ["Nuts and seeds (almonds, cashews)", "Correct. These are high in magnesium."],
      ["Whole grains", "Correct. Whole grains are good sources."],
      ["Dark green leafy vegetables", "Correct. Chlorophyll contains magnesium."],
      ["Dark chocolate", "Correct. Dark chocolate is a surprisingly good source of magnesium."],
      ["Soda", "Soda is not a magnesium source."]
    ], ans: [0,1,2,3] },

  // =====================================================================
  // PHOSPHORUS  (expected 3.0–4.5 mg/dL)
  // =====================================================================
  { topic: "Phosphorus",
    q: "A client with chronic kidney disease has a high phosphorus level. Which other imbalance should the nurse expect?",
    opts: [
      ["Hypocalcemia", "Correct. Calcium and phosphorus have an inverse relationship. When one goes up, the other goes down."],
      ["Hypercalcemia", "High phosphorus pulls calcium DOWN."],
      ["Hyponatremia", "Sodium isn't directly linked to phosphorus."],
      ["Hypokalemia", "CKD usually raises potassium."]
    ], ans: [0] },

  { topic: "Phosphorus",
    q: "A client with CKD is prescribed a phosphate binder such as calcium acetate. When should the client take it?",
    opts: [
      ["With meals", "Correct. Binders grab the phosphorus in food in the gut. They only work when food is there."],
      ["At bedtime on an empty stomach", "With no food in the gut, there is no dietary phosphorus to bind."],
      ["Only when phosphorus is above 8 mg/dL", "It is taken routinely with meals, not only when the level is very high."],
      ["One hour after each meal", "By then the food's phosphorus has already been absorbed."]
    ], ans: [0] },

  { topic: "Phosphorus",
    q: "A malnourished client was started on tube feedings 2 days ago and now has severe muscle weakness and shallow breathing. Which imbalance does the nurse suspect?",
    opts: [
      ["Hypophosphatemia (refeeding syndrome)", "Correct. Feeding drives phosphorus into the cells. Low phosphorus weakens muscles, including the breathing muscles."],
      ["Hypernatremia", "Possible with tube feedings, but weak breathing muscles after refeeding point to phosphorus."],
      ["Hypercalcemia", "Refeeding doesn't cause high calcium."],
      ["Hyperkalemia", "Refeeding causes potassium to drop, not rise."]
    ], ans: [0] },

  // =====================================================================
  // MIXED ELECTROLYTES
  // =====================================================================
  { topic: "Electrolytes: mixed",
    q: "Match the finding to the imbalance: a positive Chvostek's sign is most associated with which imbalance?",
    opts: [
      ["Hypocalcemia", "Correct. Chvostek's (facial twitch) and Trousseau's (carpal spasm) are the classic low-calcium signs. Hypomagnesemia can cause them too."],
      ["Hypercalcemia", "High calcium decreases neuromuscular irritability."],
      ["Hyperkalemia", "Hyperkalemia's hallmark is peaked T waves, not Chvostek's sign."],
      ["Hypernatremia", "Hypernatremia's hallmarks are thirst and confusion."]
    ], ans: [0] },

  { topic: "Electrolytes: mixed",
    q: "Which two electrolytes have an inverse relationship (when one rises, the other falls)?",
    opts: [
      ["Calcium and phosphorus", "Correct. This is the classic inverse pair. High phosphorus in CKD drives calcium down."],
      ["Calcium and magnesium", "These usually move in the SAME direction. Low magnesium often causes low calcium."],
      ["Potassium and magnesium", "These usually move in the SAME direction. Low magnesium keeps potassium low."],
      ["Sodium and chloride", "These usually move together. Chloride follows sodium."]
    ], ans: [0] },

  { topic: "Electrolytes: mixed",
    q: "Which imbalances cause DECREASED deep tendon reflexes? Select all that apply.",
    opts: [
      ["Hypermagnesemia", "Correct. Magnesium depresses the neuromuscular junction."],
      ["Hypercalcemia", "Correct. High calcium sedates the nerves and muscles."],
      ["Hypokalemia", "Correct. Low potassium causes weakness and decreased reflexes."],
      ["Hypocalcemia", "Low calcium INCREASES reflexes and causes tetany."],
      ["Hypomagnesemia", "Low magnesium INCREASES reflexes."]
    ], ans: [0,1,2] },

  { topic: "Electrolytes: mixed",
    q: "Which client should the nurse see first?",
    opts: [
      ["Potassium 6.9 mEq/L with a new irregular heart rhythm", "Correct. Life-threatening hyperkalemia with a dysrhythmia can lead to cardiac arrest."],
      ["Sodium 133 mEq/L with mild fatigue", "Mildly low and stable. It can wait."],
      ["Calcium 10.7 mg/dL with constipation", "Slightly high with mild symptoms. Not the priority."],
      ["Magnesium 1.2 mEq/L with no symptoms", "Slightly low with no symptoms. It needs replacement, but it isn't the most urgent."]
    ], ans: [0] },

  { topic: "Electrolytes: mixed",
    q: "Which imbalances are known to increase the risk of digoxin toxicity? Select all that apply.",
    opts: [
      ["Hypokalemia", "Correct. Low potassium is the classic one."],
      ["Hypomagnesemia", "Correct. Low magnesium also raises the risk."],
      ["Hypercalcemia", "Correct. High calcium works with digoxin on the heart and raises the risk of dysrhythmias."],
      ["Hyperkalemia", "Hyperkalemia isn't what makes digoxin toxic. (Severe digoxin toxicity can itself cause high potassium.)"]
    ], ans: [0,1,2] },

  { topic: "Electrolytes: mixed",
    q: "Which imbalances cause neuromuscular IRRITABILITY (twitching, tetany, hyperreflexia)? Select all that apply.",
    opts: [
      ["Hypocalcemia", "Correct. This is the classic one: tetany, plus positive Chvostek's and Trousseau's signs."],
      ["Hypomagnesemia", "Correct. Tremors, hyperreflexia and tetany."],
      ["Hypermagnesemia", "High magnesium DEPRESSES reflexes."],
      ["Hypercalcemia", "High calcium DEPRESSES reflexes."]
    ], ans: [0,1] },

  // =====================================================================
  // CRYSTALLOIDS
  // =====================================================================
  { topic: "Crystalloids",
    q: "Which IV solutions are ISOTONIC? Select all that apply.",
    opts: [
      ["0.9% sodium chloride (normal saline)", "Correct. It has the same tonicity as plasma."],
      ["Lactated Ringer's", "Correct. LR is isotonic and contains sodium, potassium, calcium, chloride and lactate."],
      ["D5W (in the bag)", "Correct. D5W is isotonic in the bag. Once the body uses the dextrose, it acts like free (hypotonic) water."],
      ["0.45% sodium chloride", "Half-normal saline is HYPOtonic."],
      ["3% sodium chloride", "3% saline is HYPERtonic."]
    ], ans: [0,1,2] },

  { topic: "Crystalloids",
    q: "Which IV solution is HYPOtonic?",
    opts: [
      ["0.45% sodium chloride", "Correct. It has fewer particles than plasma, so water moves INTO the cells."],
      ["Lactated Ringer's", "LR is isotonic."],
      ["D5 0.9% sodium chloride", "D5NS is hypertonic."],
      ["D10W", "D10W is hypertonic."]
    ], ans: [0] },

  { topic: "Crystalloids",
    q: "Which IV solutions are HYPERtonic? Select all that apply.",
    opts: [
      ["3% sodium chloride", "Correct. It pulls water OUT of the cells into the vessels."],
      ["D5 0.45% sodium chloride", "Correct. Adding dextrose to half-normal saline makes it hypertonic in the bag."],
      ["D5 Lactated Ringer's", "Correct. Adding dextrose makes LR hypertonic."],
      ["D10W", "Correct. 10% dextrose is hypertonic."],
      ["0.9% sodium chloride", "Normal saline is isotonic."]
    ], ans: [0,1,2,3] },

  { topic: "Crystalloids",
    q: "What happens to cells when a HYPOtonic solution is infused?",
    opts: [
      ["Water moves into the cells and they swell", "Correct. Fluid moves toward the higher particle concentration inside the cell. That's why hypotonic fluid is dangerous with brain swelling."],
      ["Water moves out of the cells and they shrink", "That's what HYPERtonic solutions do."],
      ["Nothing. Fluid stays in the vessels", "That describes isotonic fluids, and colloids even more so."],
      ["Cells lose sodium to the blood", "Tonicity moves water, not sodium."]
    ], ans: [0] },

  { topic: "Crystalloids",
    q: "A client with a head injury and increased intracranial pressure needs IV fluids. Which solution should the nurse question?",
    opts: [
      ["0.45% sodium chloride", "Correct. Hypotonic fluid moves water into brain cells and worsens cerebral edema. D5W is also avoided for the same reason."],
      ["0.9% sodium chloride", "Isotonic saline is commonly used with increased ICP."],
      ["3% sodium chloride", "Hypertonic saline may be ordered to pull fluid out of the brain."],
      ["Mannitol", "Mannitol is used to TREAT increased ICP."]
    ], ans: [0] },

  { topic: "Crystalloids",
    q: "Which IV fluid is the ONLY one that may be hung with a blood transfusion?",
    opts: [
      ["0.9% sodium chloride", "Correct. Normal saline is the only fluid compatible with blood products."],
      ["Lactated Ringer's", "The calcium in LR can make the blood clot in the tubing."],
      ["D5W", "Dextrose solutions can make red blood cells clump and break apart (hemolysis)."],
      ["0.45% sodium chloride", "Hypotonic fluid can make red cells swell and burst."]
    ], ans: [0] },

  { topic: "Crystalloids",
    q: "Lactated Ringer's should be used with caution or avoided in which client?",
    opts: [
      ["A client with liver failure", "Correct. The liver changes lactate into bicarbonate. A failing liver can't, so lactate builds up. LR also contains potassium, so use caution with kidney failure and hyperkalemia."],
      ["A client with burns in the first 24 hours", "LR is a common fluid for burn resuscitation."],
      ["A client losing blood during surgery", "LR is commonly used to replace surgical fluid losses."],
      ["A client with mild dehydration from vomiting", "Isotonic fluids like LR or NS are appropriate here."]
    ], ans: [0] },

  { topic: "Crystalloids",
    q: "A client is receiving 3% sodium chloride. Which findings should the nurse watch for? Select all that apply.",
    opts: [
      ["Crackles in the lungs and shortness of breath", "Correct. Hypertonic saline pulls fluid into the vessels. That can cause fluid overload and pulmonary edema."],
      ["Distended neck veins and rising blood pressure", "Correct. These are signs of fluid volume excess."],
      ["Sodium rising too high or too fast", "Correct. Check sodium often and watch for hypernatremia."],
      ["Cell swelling and worsening cerebral edema", "Hypertonic fluid SHRINKS cells and is used to REDUCE cerebral edema."]
    ], ans: [0,1,2] },

  { topic: "Crystalloids",
    q: "Which client is the best candidate for an isotonic crystalloid such as 0.9% sodium chloride?",
    opts: [
      ["A client with fluid volume deficit from vomiting and diarrhea", "Correct. Isotonic fluid replaces lost volume and stays in the extracellular space."],
      ["A client with heart failure and crackles", "More volume would worsen fluid overload."],
      ["A client with hypernatremia from water loss", "Free-water loss is treated with hypotonic fluid."],
      ["A client with SIADH", "SIADH is treated with fluid restriction."]
    ], ans: [0] },

  { topic: "Crystalloids",
    q: "How do crystalloids differ from colloids?",
    opts: [
      ["Crystalloids have small molecules that move out of the vessels into the tissues. Colloids have large molecules that stay in the vessels.", "Correct. A lot of an isotonic crystalloid ends up in the interstitial space. Colloids stay in the vessels and pull fluid in."],
      ["Crystalloids stay in the vessels longer than colloids", "It's the opposite. Colloids stay in the vessels longer."],
      ["Crystalloids are all blood products", "Crystalloids are salt and sugar solutions. Albumin (a colloid) is the one derived from blood."],
      ["Colloids contain dextrose and crystalloids do not", "That isn't the difference. Some crystalloids contain dextrose (D5W, D5NS)."]
    ], ans: [0] },

  { topic: "Crystalloids",
    q: "Hypotonic solutions are contraindicated in which clients? Select all that apply.",
    opts: [
      ["A client with increased intracranial pressure", "Correct. They swell brain cells."],
      ["A client with severe burns", "Correct. They can move more fluid out of the vessels and worsen hypovolemia and third spacing."],
      ["A client with trauma and hypovolemia", "Correct. They don't stay in the vessels to support blood pressure."],
      ["A client with hypernatremia and cellular dehydration", "That client is the correct use for hypotonic fluid."]
    ], ans: [0,1,2] },

  { topic: "Crystalloids",
    q: "A client receiving IV fluids at 150 mL/hr develops a bounding pulse, crackles and dyspnea. What is the nurse's FIRST action?",
    opts: [
      ["Slow the infusion and raise the head of the bed", "Correct. Reduce the volume coming in and help breathing first. Then notify the provider, give oxygen and anticipate a diuretic."],
      ["Increase the rate to flush the line", "That would worsen fluid overload."],
      ["Lay the client flat", "Lying flat makes breathing harder in pulmonary edema."],
      ["Document and recheck in 4 hours", "These are signs of fluid overload. Act now."]
    ], ans: [0] },

  { topic: "Crystalloids",
    q: "Why is D5W not used for fluid resuscitation in a hypovolemic client?",
    opts: [
      ["Once the dextrose is used, it acts like free water and leaves the vessels", "Correct. It turns hypotonic in the body. Most of it moves into the cells instead of supporting blood pressure."],
      ["It contains too much sodium", "D5W contains no sodium."],
      ["It causes hyperkalemia", "D5W doesn't contain potassium."],
      ["It is hypertonic and causes cell shrinkage", "D5W is isotonic in the bag and hypotonic in the body."]
    ], ans: [0] },

  { topic: "Crystalloids",
    q: "Which fluid is commonly used for burn resuscitation in the first 24 hours?",
    opts: [
      ["Lactated Ringer's", "Correct. LR is the standard crystalloid in burn formulas such as Parkland."],
      ["0.45% sodium chloride", "Hypotonic fluid worsens third spacing."],
      ["D5W", "D5W leaves the vessels and won't restore volume."],
      ["25% albumin", "Colloids are usually held for the first 24 hours, because leaky capillaries let protein escape into the tissues."]
    ], ans: [0] },

  { topic: "Crystalloids",
    q: "A client with DKA is receiving IV fluids. Which order of fluids does the nurse expect?",
    opts: [
      ["0.9% NaCl first, then 0.45% NaCl, then dextrose is added once glucose falls to about 250", "Correct. Isotonic fluid restores volume first. Hypotonic fluid then rehydrates the cells, and dextrose prevents hypoglycemia as insulin keeps working."],
      ["D5W first, then 0.9% NaCl", "Giving dextrose first would worsen the hyperglycemia."],
      ["3% NaCl first", "DKA is a volume deficit. Hypertonic saline isn't used."],
      ["Albumin only", "DKA is treated with crystalloids and insulin."]
    ], ans: [0] },

  // =====================================================================
  // COLLOIDS
  // =====================================================================
  { topic: "Colloids",
    q: "Which solutions are COLLOIDS? Select all that apply.",
    opts: [
      ["Albumin", "Correct. Albumin is a protein colloid made from human plasma."],
      ["Dextran", "Correct. Dextran is a synthetic sugar-polymer colloid."],
      ["Hetastarch (hydroxyethyl starch)", "Correct. Hetastarch is a synthetic starch colloid."],
      ["Lactated Ringer's", "LR is a crystalloid."],
      ["Plasma protein fraction", "Correct. Plasma protein fraction is a protein colloid made from plasma."]
    ], ans: [0,1,2,4] },

  { topic: "Colloids",
    q: "How do colloids increase intravascular volume?",
    opts: [
      ["Their large molecules raise oncotic pressure and pull fluid from the tissues into the vessels", "Correct. They stay in the vessels and act like a sponge. They are volume expanders."],
      ["They carry oxygen to the tissues", "Only red blood cells carry oxygen."],
      ["They make the kidneys keep sodium", "Colloids work by oncotic pressure, not by acting on the kidneys."],
      ["They move water into the cells", "That's what hypotonic crystalloids do."]
    ], ans: [0] },

  { topic: "Colloids",
    q: "A client is receiving dextran. Which complications should the nurse watch for? Select all that apply.",
    opts: [
      ["Allergic or anaphylactic reaction", "Correct. Dextran carries a known allergy risk. Watch for hives, wheezing and hypotension, especially early in the infusion."],
      ["Bleeding", "Correct. Dextran interferes with platelets and clotting. Watch for bruising and bleeding gums, and monitor coagulation labs."],
      ["Fluid volume overload", "Correct. Like all colloids, dextran pulls fluid into the vessels."],
      ["Hypercalcemia", "Dextran doesn't cause high calcium."]
    ], ans: [0,1,2] },

  { topic: "Colloids",
    q: "A client receiving hetastarch should be monitored most closely for which problems? Select all that apply.",
    opts: [
      ["Kidney injury (watch urine output and creatinine)", "Correct. Hydroxyethyl starch is linked to acute kidney injury, especially in critically ill and septic clients."],
      ["Bleeding", "Correct. Hetastarch reduces clotting factor activity and platelet function."],
      ["Fluid overload", "Correct. It is a strong volume expander."],
      ["Hyperglycemia", "Hetastarch is starch, not dextrose. It doesn't raise blood glucose."]
    ], ans: [0,1,2] },

  { topic: "Colloids",
    q: "A client with cerebral edema is receiving a colloid. Which finding shows the therapy is working?",
    opts: [
      ["Intracranial pressure falls to 12 mm Hg and the client is more alert", "Correct. Normal ICP is 5–15 mm Hg. A lower ICP with better LOC means fluid is leaving the brain tissue."],
      ["Glasgow Coma Scale drops from 13 to 10", "A drop of 2 or more points means the client is getting worse."],
      ["Pupils are newly unequal", "This is a late, serious sign of rising ICP."],
      ["New bradycardia with widening pulse pressure", "This is Cushing's triad, a sign of severe ICP and possible brain herniation."]
    ], ans: [0] },

  { topic: "Colloids",
    q: "A nurse is giving a colloid to a client. Which findings indicate FLUID VOLUME EXCESS? Select all that apply.",
    opts: [
      ["Crackles in the lungs", "Correct. Fluid is backing up into the lungs."],
      ["Distended neck veins", "Correct. Venous pressure is high."],
      ["Bounding pulse and rising BP", "Correct. Circulating volume is increased."],
      ["Weight gain of 2 lb in a day", "Correct. A gain of about 1 kg (2.2 lb) in 24 hours is roughly 1 L of retained fluid."],
      ["Poor skin turgor and a thready pulse", "Those are signs of DEFICIT, not excess."]
    ], ans: [0,1,2,3] },

  { topic: "Colloids",
    q: "A client receiving a colloid infusion develops hives, wheezing and hypotension. What is the nurse's FIRST action?",
    opts: [
      ["Stop the infusion", "Correct. Stop what's causing the reaction. Keep the vein open with 0.9% NaCl on new tubing, then call the provider and anticipate epinephrine and antihistamines."],
      ["Slow the infusion rate", "Anaphylaxis needs the infusion stopped, not slowed."],
      ["Give acetaminophen", "Acetaminophen doesn't treat anaphylaxis."],
      ["Recheck vital signs in 15 minutes", "This is an emergency. Act right away."]
    ], ans: [0] },

  { topic: "Colloids",
    q: "When is a colloid preferred over a crystalloid?",
    opts: [
      ["When volume needs to stay in the vessels, such as hypovolemia with low albumin or a need to pull fluid out of swollen tissue", "Correct. Colloids keep volume in the vessels and draw edema fluid back in."],
      ["For routine maintenance fluids in a healthy surgical client", "Crystalloids are used for routine maintenance."],
      ["To treat hypernatremia", "Hypernatremia needs free water, which means a hypotonic crystalloid."],
      ["To run with a blood transfusion", "Only 0.9% NaCl runs with blood."]
    ], ans: [0] },

  // =====================================================================
  // MANNITOL
  // =====================================================================
  { topic: "Mannitol",
    q: "What is the classification and main action of mannitol?",
    opts: [
      ["Osmotic diuretic. It pulls fluid from the tissues into the blood, and the kidneys excrete it", "Correct. Mannitol raises plasma osmolality. Fluid moves out of the brain and eyes into the vessels and leaves as urine."],
      ["Loop diuretic. It blocks sodium reabsorption in the loop of Henle", "That's furosemide."],
      ["Potassium-sparing diuretic", "That's spironolactone."],
      ["Colloid volume expander made from plasma", "That's albumin. Mannitol is a sugar alcohol."]
    ], ans: [0] },

  { topic: "Mannitol",
    q: "Which conditions is mannitol used for? Select all that apply.",
    opts: [
      ["Increased intracranial pressure / cerebral edema", "Correct. This is the main use."],
      ["Increased intraocular pressure (acute glaucoma)", "Correct. It pulls fluid out of the eye."],
      ["Promoting urine output in early acute kidney injury (oliguria)", "Correct. It is used to keep urine flowing and to help flush out some toxins."],
      ["Heart failure with pulmonary edema", "Mannitol first pulls fluid INTO the vessels, which would worsen heart failure. This is a contraindication."],
      ["Hypokalemia", "Mannitol doesn't treat hypokalemia. It can cause electrolyte loss."]
    ], ans: [0,1,2] },

  { topic: "Mannitol",
    q: "The nurse notices small crystals in a vial of mannitol. What should the nurse do?",
    opts: [
      ["Warm the vial to dissolve the crystals and give it through an in-line filter", "Correct. Mannitol crystallizes when cold. Warm it until it is clear, and always use a filter. If the crystals won't dissolve, don't use it."],
      ["Shake it well and give it as is", "Crystals must not be infused."],
      ["Refrigerate it until the crystals settle", "Cold makes the crystals WORSE."],
      ["Dilute it with D5W", "Dilution doesn't fix the crystals."]
    ], ans: [0] },

  { topic: "Mannitol",
    q: "Which conditions are contraindications to mannitol? Select all that apply.",
    opts: [
      ["Anuria", "Correct. If the kidneys aren't making urine, mannitol stays in the vessels and causes fluid overload."],
      ["Severe heart failure or pulmonary edema", "Correct. The initial fluid shift into the vessels can worsen them."],
      ["Active intracranial bleeding (except during craniotomy)", "Correct. It can make bleeding worse by shrinking the brain away from the bleed."],
      ["Severe dehydration", "Correct. More diuresis would make dehydration worse."],
      ["Cerebral edema", "That is the main INDICATION."]
    ], ans: [0,1,2,3] },

  { topic: "Mannitol",
    q: "A client is receiving mannitol for increased ICP. Which assessments are priorities? Select all that apply.",
    opts: [
      ["Strict intake and output, and urine output each hour", "Correct. Large diuresis is expected. Low output may mean kidney failure, and mannitol can build up."],
      ["Serum sodium, potassium and osmolality", "Correct. Mannitol causes fluid and electrolyte losses. Many protocols hold it when osmolality is above about 310–320 mOsm/kg."],
      ["Lung sounds and signs of heart failure", "Correct. The early fluid shift into the vessels can cause pulmonary edema."],
      ["Neuro checks (LOC, pupils, GCS) and ICP", "Correct. These show whether it is working."],
      ["Blood glucose every hour", "Mannitol is a sugar alcohol that isn't metabolized like glucose. Hourly glucose checks aren't a key part of mannitol monitoring."]
    ], ans: [0,1,2,3] },

  { topic: "Mannitol",
    q: "A client receiving mannitol develops crackles, dyspnea and distended neck veins. What should the nurse suspect?",
    opts: [
      ["Fluid volume overload / heart failure from the fluid shift into the vessels", "Correct. Mannitol pulls fluid into the blood faster than the kidneys can remove it. Stop the infusion and notify the provider."],
      ["Expected therapeutic effect", "Signs of pulmonary edema are an adverse effect, not the goal."],
      ["Dehydration", "Dehydration causes flat neck veins and clear lungs."],
      ["Hypocalcemia", "These are signs of fluid overload, not low calcium."]
    ], ans: [0] },

  { topic: "Mannitol",
    q: "Which finding shows that mannitol is having the desired effect in a client with cerebral edema?",
    opts: [
      ["ICP drops and the client becomes more alert", "Correct. Lower ICP and better LOC show that fluid is leaving the brain."],
      ["Urine output of 15 mL/hr", "That's oliguria. Mannitol should increase urine output."],
      ["Serum osmolality of 340 mOsm/kg", "That's too high. Most protocols hold mannitol above about 310–320."],
      ["Worsening headache and vomiting", "These are signs of rising ICP."]
    ], ans: [0] },

  { topic: "Mannitol",
    q: "Which adverse effects can mannitol cause? Select all that apply.",
    opts: [
      ["Fluid and electrolyte imbalances (sodium, potassium)", "Correct. Large diuresis pulls electrolytes out with it."],
      ["Dehydration and hypotension", "Correct. These come from too much diuresis."],
      ["Tissue damage if the IV infiltrates", "Correct. Mannitol is hyperosmolar and harms tissue outside the vein."],
      ["Pulmonary edema / heart failure", "Correct. These come from the early fluid shift into the vessels."],
      ["Hypercoagulability", "Mannitol isn't known for causing clots."]
    ], ans: [0,1,2,3] },

  { topic: "Mannitol",
    q: "A client with oliguria is ordered a mannitol TEST dose. What is the purpose?",
    opts: [
      ["To see if the kidneys can respond before giving the full dose", "Correct. If urine output doesn't rise, the kidneys can't clear mannitol, and the full dose would cause fluid overload."],
      ["To check for an allergic reaction", "The test dose checks kidney response, not allergy."],
      ["To measure ICP response", "The oliguria test dose is about the kidneys."],
      ["To load the client so the drug works faster", "It isn't a loading dose."]
    ], ans: [0] },

  { topic: "Mannitol",
    q: "Which equipment does the nurse need to give IV mannitol safely? Select all that apply.",
    opts: [
      ["An in-line IV filter", "Correct. It catches microscopic crystals."],
      ["An infusion pump", "Correct. The rate needs to be controlled."],
      ["Supplies for an indwelling urinary catheter, as ordered", "Correct. Hourly urine output must be measured during rapid diuresis."],
      ["A blood warmer", "A blood warmer is for blood products. The mannitol vial may be warmed before the infusion to dissolve crystals."]
    ], ans: [0,1,2] },

  { topic: "Mannitol",
    q: "During a mannitol infusion, the client's urine output falls to 20 mL/hr for 2 hours. What should the nurse do?",
    opts: [
      ["Notify the provider. The kidneys may not be clearing the drug", "Correct. Mannitol that isn't excreted stays in the vessels and causes fluid overload. Kidney function needs to be checked."],
      ["Increase the infusion rate to push more urine", "More mannitol with poor kidney output raises the risk of overload."],
      ["Encourage oral fluids and continue", "This doesn't address a possible kidney problem."],
      ["Do nothing. This is expected", "Mannitol should INCREASE urine output. A drop is a red flag."]
    ], ans: [0] },

  { topic: "Mannitol",
    q: "A nurse is comparing mannitol and 3% saline for increased ICP. What do they have in common?",
    opts: [
      ["Both pull fluid out of brain tissue by creating an osmotic gradient", "Correct. Both are hyperosmolar and reduce cerebral edema. Monitor sodium, osmolality and fluid status with either."],
      ["Both are hypotonic", "Both are HYPERosmolar."],
      ["Both are colloids", "Neither is a colloid. 3% NaCl is a hypertonic crystalloid, and mannitol is an osmotic diuretic."],
      ["Both are safe to give with blood", "Only 0.9% NaCl is given with blood."]
    ], ans: [0] },

  { topic: "Mannitol",
    q: "A client on mannitol has a serum sodium of 149 mEq/L and is very thirsty. Which imbalance is developing?",
    opts: [
      ["Hypernatremia from water loss through diuresis", "Correct. Mannitol makes the client lose more water than sodium. Report it."],
      ["Hyponatremia", "149 is HIGH (normal is 136–145)."],
      ["Hyperkalemia", "Thirst and high sodium point to hypernatremia."],
      ["Hypermagnesemia", "There's no magnesium data here, and thirst doesn't point to magnesium."]
    ], ans: [0] },

  // =====================================================================
  // ALBUMIN  (serum albumin expected 3.5–5.0 g/dL)
  // =====================================================================
  { topic: "Albumin",
    q: "What is the expected reference range for serum albumin?",
    opts: [
      ["3.5–5.0 g/dL", "Correct. Below 3.5 is hypoalbuminemia, which leads to edema and third spacing."],
      ["6.0–8.0 g/dL", "That's closer to the range for TOTAL protein."],
      ["1.3–2.1 g/dL", "That's close to the magnesium range."],
      ["12–16 g/dL", "That's the hemoglobin range for females."]
    ], ans: [0] },

  { topic: "Albumin",
    q: "Which conditions is IV albumin used for? Select all that apply.",
    opts: [
      ["Hypovolemia and shock", "Correct. 5% albumin expands volume."],
      ["Hypoalbuminemia (such as liver failure or nephrotic syndrome)", "Correct. It raises oncotic pressure and pulls edema fluid back into the vessels."],
      ["Burns, usually after the first 24 hours", "Correct. Once the capillaries stop leaking, albumin stays in the vessels and helps."],
      ["Paracentesis of a large amount of ascites", "Correct. It prevents a dangerous fluid shift and low blood pressure after a large volume of fluid is drained."],
      ["Hyperkalemia", "Albumin doesn't treat high potassium."]
    ], ans: [0,1,2,3] },

  { topic: "Albumin",
    q: "What is the difference between 5% and 25% albumin?",
    opts: [
      ["5% is isotonic and replaces volume. 25% is hyperoncotic and pulls about 3–5 times its volume from the tissues", "Correct. 25% albumin is concentrated. It draws edema fluid in, so it carries a higher risk of fluid overload."],
      ["5% is stronger than 25%", "25% is five times more concentrated."],
      ["They are the same product in different bag sizes", "They act differently. Check the concentration on the order."],
      ["25% is a crystalloid", "Both are colloids."]
    ], ans: [0] },

  { topic: "Albumin",
    q: "Which actions are correct when giving IV albumin? Select all that apply.",
    opts: [
      ["Check that the solution is clear amber, with no cloudiness or particles", "Correct. Don't use it if it is cloudy or has sediment."],
      ["Use the vented tubing supplied and start within 4 hours of opening", "Correct. Albumin has no preservative, so it must be used promptly once opened."],
      ["Monitor for fluid overload, especially with 25%", "Correct. Check lung sounds, neck veins, BP and I&O."],
      ["Type and crossmatch the client first", "Albumin doesn't need a type and crossmatch."],
      ["Monitor for allergic reaction (fever, chills, hives)", "Correct. It is a plasma product and can cause reactions."]
    ], ans: [0,1,2,4] },

  { topic: "Albumin",
    q: "A client is receiving 25% albumin. Which finding requires the nurse to slow or stop the infusion and notify the provider?",
    opts: [
      ["New crackles with shortness of breath", "Correct. This is fluid overload or pulmonary edema, the main risk of concentrated albumin."],
      ["Increased urine output", "Increased urine output is expected as fluid moves back into the vessels and reaches the kidneys."],
      ["Decreased leg edema", "This is the desired effect."],
      ["BP rising from 88/50 to 104/64", "Better BP in a hypovolemic client is the goal."]
    ], ans: [0] },

  { topic: "Albumin",
    q: "Which client should receive albumin with the most caution?",
    opts: [
      ["A client with severe heart failure", "Correct. Pulling more fluid into the vessels can push a weak heart into pulmonary edema. Severe anemia is another caution."],
      ["A client with liver cirrhosis and ascites", "This client may be a candidate for albumin."],
      ["A client in hypovolemic shock", "Albumin is used to treat hypovolemia."],
      ["A client with nephrotic syndrome and low albumin", "This client may be a candidate for albumin."]
    ], ans: [0] },

  { topic: "Albumin",
    q: "A client with cirrhosis has a serum albumin of 2.3 g/dL. Which findings does the nurse expect? Select all that apply.",
    opts: [
      ["Ascites", "Correct. Low oncotic pressure lets fluid leak into the abdomen."],
      ["Peripheral edema", "Correct. Fluid leaks into the tissues."],
      ["Low intravascular volume even with visible edema (third spacing)", "Correct. The fluid is in the wrong place, out of the vessels."],
      ["Bounding pulse and hypertension", "With low albumin, fluid leaves the vessels. The client is more likely to be hypotensive."]
    ], ans: [0,1,2] },

  { topic: "Albumin",
    q: "How does albumin reduce edema?",
    opts: [
      ["It raises plasma oncotic pressure, which pulls fluid from the tissues back into the vessels", "Correct. Albumin is the main protein that holds fluid in the bloodstream."],
      ["It makes the kidneys excrete sodium", "That's a diuretic action, not albumin's."],
      ["It moves fluid into the cells", "That's what hypotonic fluids do."],
      ["It speeds up the heart rate to circulate fluid", "Albumin doesn't act on the heart."]
    ], ans: [0] },

  { topic: "Albumin",
    q: "A client receiving albumin develops a fever, chills and itchy hives. What should the nurse do first?",
    opts: [
      ["Stop the infusion", "Correct. This is a reaction to a plasma product. Stop it, keep the line open with 0.9% NaCl, check vital signs and notify the provider."],
      ["Speed up the infusion to finish it", "This would give more of the product causing the reaction."],
      ["Give a diuretic", "This isn't fluid overload."],
      ["Ignore it. Chills are expected with albumin", "These are signs of a reaction and need action."]
    ], ans: [0] },

  { topic: "Albumin",
    q: "Which lab results show albumin therapy is effective in a client with hypoalbuminemia and hypovolemia? Select all that apply.",
    opts: [
      ["Serum albumin rising toward 3.5 g/dL", "Correct. The level is moving toward the expected range."],
      ["Improved blood pressure and urine output", "Correct. Better circulating volume perfuses the kidneys."],
      ["Less edema and ascites", "Correct. Fluid is moving back into the vessels."],
      ["Hematocrit rising sharply", "Albumin draws fluid into the vessels, so the hematocrit usually DROPS (dilution)."]
    ], ans: [0,1,2] },

  { topic: "Albumin",
    q: "Albumin is made from human plasma. Which statement about it is true?",
    opts: [
      ["It is heat-treated, so the risk of viral transmission is extremely low", "Correct. It is pasteurized. Some clients may still decline it for religious reasons (for example, some Jehovah's Witnesses), so ask about preferences."],
      ["It must match the client's blood type", "No type and crossmatch is needed."],
      ["It must be hung with D5W", "Albumin is given through its own line or with compatible fluids. D5W is not the standard partner."],
      ["It carries oxygen like red blood cells", "Albumin doesn't carry oxygen."]
    ], ans: [0] },

  { topic: "Albumin",
    q: "A client with large-volume ascites has a paracentesis that removes 6 L of fluid. Why does the nurse expect to give albumin?",
    opts: [
      ["To prevent hypotension and circulatory collapse from fluid rushing back into the abdomen", "Correct. Albumin keeps volume in the vessels after a large amount of fluid is removed."],
      ["To replace lost red blood cells", "Ascites fluid isn't blood."],
      ["To prevent infection at the puncture site", "Albumin isn't an antibiotic."],
      ["To reduce pain from the procedure", "Albumin isn't an analgesic."]
    ], ans: [0] },

  { topic: "Albumin",
    q: "Low serum albumin can make which electrolyte level look falsely LOW on the lab report?",
    opts: [
      ["Total calcium", "Correct. Much of the calcium in the blood is bound to albumin. With low albumin, total calcium reads low, but the ionized (active) calcium may be normal."],
      ["Sodium", "Sodium isn't protein-bound in this way."],
      ["Potassium", "Potassium isn't protein-bound in this way."],
      ["Chloride", "Chloride isn't protein-bound in this way."]
    ], ans: [0] }
  ]
};
