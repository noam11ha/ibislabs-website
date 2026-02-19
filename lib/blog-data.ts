export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-ibs",
    title: "What Is IBS? Understanding Irritable Bowel Syndrome",
    description:
      "Learn about irritable bowel syndrome (IBS) — its causes, symptoms, and how it affects millions of people worldwide.",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Education",
    keywords: ["IBS symptoms", "what is IBS", "irritable bowel syndrome"],
    content: `
## What Is Irritable Bowel Syndrome (IBS)?

Irritable bowel syndrome (IBS) is one of the most common gastrointestinal disorders, affecting an estimated **10–15% of people worldwide**. Despite how prevalent it is, IBS is often misunderstood, misdiagnosed, and undertreated. If you've been dealing with chronic stomach pain, bloating, and unpredictable bowel habits, you're not alone — and there is help.

IBS is a functional gastrointestinal disorder, meaning it affects how the gut works rather than causing visible structural damage. Unlike inflammatory bowel disease (IBD), IBS doesn't cause inflammation, ulcers, or tissue damage in the intestines — but it can dramatically impact quality of life.

## Common IBS Symptoms

IBS is characterized by a combination of symptoms that occur repeatedly over time. The hallmark signs include:

- **Abdominal pain or cramping** — often relieved after a bowel movement
- **Changes in bowel frequency** — going too often or not enough
- **Changes in stool consistency** — diarrhea, constipation, or alternating between both
- **Bloating and gas**
- **Mucus in the stool**
- **Urgency** — sudden need to rush to the bathroom
- **Feeling of incomplete evacuation**

Symptoms often fluctuate — some days may feel completely normal, while others can be debilitating. Stress, diet, hormonal changes, and sleep disruptions are all known to trigger or worsen IBS flares.

## What Causes IBS?

The exact cause of IBS isn't fully understood, but researchers have identified several contributing factors:

### 1. Gut-Brain Axis Dysregulation
The gut and brain are in constant communication through what's called the gut-brain axis. In people with IBS, this communication appears to be disrupted — meaning the gut may overreact to normal digestive processes, sending pain signals when there shouldn't be any.

### 2. Altered Gut Motility
Some people with IBS have intestines that move food through too fast (causing diarrhea) or too slow (causing constipation). This difference in motility is one reason IBS presents in different subtypes.

### 3. Gut Microbiome Imbalances
Emerging research points to the gut microbiome — the trillions of bacteria living in your intestines — as a key player in IBS. Many people develop IBS after a bout of food poisoning or gastroenteritis, a condition called post-infectious IBS.

### 4. Visceral Hypersensitivity
People with IBS often have a lower pain threshold in the gut. Normal sensations like gas or slight distension can be perceived as painful, a phenomenon called visceral hypersensitivity.

### 5. Psychological Factors
Anxiety, depression, and trauma are closely linked to IBS. This doesn't mean IBS is "all in your head" — the gut-brain connection is real and physiological. But managing mental health is an important part of managing IBS.

## Who Gets IBS?

IBS can affect anyone, but certain groups are more commonly diagnosed:

- **Women** are diagnosed with IBS about twice as often as men
- **People under 50** — IBS most commonly appears in young adulthood
- **People with a family history** of IBS or other GI disorders
- **Those with anxiety or depression**
- **People who have experienced a gut infection or food poisoning**

## How Is IBS Diagnosed?

There is no single test for IBS. Doctors typically diagnose it using the **Rome IV Criteria**, which requires:

- Recurrent abdominal pain at least **1 day per week** over the last 3 months
- Symptoms associated with two or more of: changes in stool frequency, changes in stool form, or relief with defecation

Your doctor may also run tests to rule out other conditions like celiac disease, inflammatory bowel disease, or colon cancer.

## Is There a Cure for IBS?

Currently, there is no cure for IBS — but symptoms can be effectively managed. Treatment typically involves a combination of dietary changes, stress management, gut-targeted therapies, and sometimes medication.

The first step is understanding *which type* of IBS you have — because IBS-C, IBS-D, IBS-M, and IBS-U require different approaches.

## Take Our Free IBS Quiz

Not sure which type of IBS you might have? Our free, research-backed quiz can help you identify your IBS subtype and point you toward the most effective management strategies.

Understanding your IBS type is the first step toward real, lasting relief.
    `,
  },
  {
    slug: "types-of-ibs",
    title: "IBS-C, IBS-D, IBS-M, IBS-U: The 4 Types of IBS Explained",
    description:
      "Discover the four types of IBS — constipation-predominant, diarrhea-predominant, mixed, and unclassified — and learn what makes each unique.",
    date: "January 22, 2025",
    readTime: "6 min read",
    category: "Types of IBS",
    keywords: ["types of IBS", "IBS-C", "IBS-D", "IBS-M", "IBS subtypes"],
    content: `
## The 4 Types of IBS: Which One Do You Have?

Irritable bowel syndrome is not a one-size-fits-all condition. There are **four distinct subtypes of IBS**, each defined by the predominant bowel habit pattern. Identifying your IBS type is critical — because what works for IBS-C may actually make IBS-D worse, and vice versa.

Doctors classify IBS subtypes using the **Bristol Stool Form Scale**, a chart that categorizes stool consistency from Type 1 (hard, lumpy pellets) to Type 7 (watery liquid).

---

## IBS-C: Constipation-Predominant IBS

**IBS-C** is characterized by infrequent, hard, or difficult-to-pass stools. People with IBS-C often experience:

- Fewer than 3 bowel movements per week
- Hard, lumpy stools (Bristol Type 1-2)
- Straining during bowel movements
- Feeling of incomplete emptying
- Abdominal bloating and distension
- Persistent cramping and discomfort

### Who Gets IBS-C?
IBS-C is more commonly reported in women. Many people with IBS-C describe feeling "backed up" even after going to the bathroom. The bloating associated with IBS-C can be severe and affect body image and confidence.

### Managing IBS-C
- **Dietary fiber**: Soluble fiber (psyllium husk, oats) is better tolerated than insoluble fiber
- **Hydration**: Adequate water intake is essential
- **Low-FODMAP diet**: Can reduce fermentation and bloating
- **Exercise**: Regular movement stimulates gut motility
- **Medications**: Linaclotide, lubiprostone, and osmotic laxatives are FDA-approved for IBS-C

---

## IBS-D: Diarrhea-Predominant IBS

**IBS-D** is the most common IBS subtype and is characterized by frequent, loose, or urgent bowel movements. People with IBS-D often experience:

- 3 or more loose/watery bowel movements per day
- Urgent, sudden need to use the bathroom
- Diarrhea-predominant stools (Bristol Type 6-7)
- Abdominal cramping that is relieved after a bowel movement
- Anxiety about being near a bathroom
- Mucus in the stool

### Who Gets IBS-D?
IBS-D is more commonly reported in men, though it affects all genders. Many people with IBS-D significantly limit their social activities, travel, and careers due to fear of accidents or sudden urgency.

### Managing IBS-D
- **Low-FODMAP diet**: Reduces fermentable carbohydrates that trigger loose stools
- **Avoiding trigger foods**: Common triggers include caffeine, alcohol, fatty foods, and dairy
- **Soluble fiber**: Can help bulk up stools
- **Stress management**: IBS-D is particularly responsive to stress
- **Medications**: Rifaximin (antibiotic), eluxadoline, and loperamide are used for IBS-D

---

## IBS-M: Mixed IBS

**IBS-M** (also called IBS-Mixed or alternating IBS) is characterized by alternating episodes of constipation and diarrhea. This is often the most frustrating subtype because:

- Bowel habits are unpredictable
- Hard stools (Bristol 1-2) and loose stools (Bristol 6-7) both occur regularly
- Treatment must address both constipation and diarrhea
- Symptoms can shift from week to week

### The Challenge of IBS-M
Many people with IBS-M go years without a proper diagnosis because their symptoms seem contradictory. A week of constipation followed by days of diarrhea can be confusing for both patients and doctors.

### Managing IBS-M
- **Identifying personal triggers** is especially important in IBS-M
- **Consistent dietary habits** help regulate the gut
- **Stress reduction** is particularly important
- **Peppermint oil**: Can help with overall gut motility
- **Gut-directed hypnotherapy**: Has strong evidence for IBS-M

---

## IBS-U: Unclassified IBS

**IBS-U** (Unclassified) is the diagnosis given when a person meets the criteria for IBS but their bowel habits don't fit neatly into C, D, or M categories. This may be because:

- Stool consistency is abnormal but not clearly constipation or diarrhea
- Symptoms are still being assessed over time
- Bowel habits change frequently enough that classification is difficult

IBS-U is relatively uncommon — most people eventually shift into one of the other three categories with more observation.

---

## How IBS Types Can Change Over Time

It's important to know that your IBS subtype is **not permanent**. Studies show that many people shift between subtypes over the course of their illness. Someone with IBS-C may develop IBS-M, or IBS-D may gradually transition to IBS-M. This is why regular reassessment is important.

---

## Identifying Your IBS Type

The most reliable way to identify your IBS subtype is to track your symptoms over time — specifically your stool consistency and bowel frequency. The Bristol Stool Form Scale is a helpful tool for this.

Alternatively, our **free IBS type quiz** uses validated questions to help you identify your most likely subtype based on your current symptoms. It takes less than 3 minutes and gives you immediate results.
    `,
  },
  {
    slug: "ibs-treatment-options",
    title: "IBS Treatment Options: What Actually Works in 2025",
    description:
      "From the low-FODMAP diet to gut-directed therapies, here are the most effective IBS treatment options backed by science.",
    date: "February 5, 2025",
    readTime: "7 min read",
    category: "Treatment",
    keywords: [
      "IBS treatment",
      "IBS diet",
      "low FODMAP",
      "IBS remedies",
      "IBS management",
    ],
    content: `
## IBS Treatment: What the Research Actually Shows

Living with IBS means navigating an overwhelming sea of advice — elimination diets, probiotics, supplements, medications, and lifestyle changes. The challenge is that IBS varies so much from person to person, and treatments that work wonders for one person may do nothing for another.

This guide breaks down the most evidence-backed IBS treatments in 2025, organized by type, so you can have an informed conversation with your healthcare provider.

---

## 1. Dietary Interventions

Diet is often the first line of treatment for IBS — and for good reason. What you eat directly impacts gut motility, gas production, and symptom severity.

### The Low-FODMAP Diet
The low-FODMAP diet is the most well-researched dietary intervention for IBS, with **70% of people experiencing significant improvement** in clinical trials.

FODMAPs (Fermentable Oligosaccharides, Disaccharides, Monosaccharides, and Polyols) are short-chain carbohydrates that are poorly absorbed in the small intestine. In people with IBS, they ferment rapidly and cause gas, bloating, and changes in bowel habits.

**The protocol has three phases:**
1. **Elimination (4-6 weeks)**: Remove all high-FODMAP foods
2. **Reintroduction**: Systematically test food groups one at a time
3. **Personalization**: Create a long-term diet based on your specific triggers

The low-FODMAP diet should be done with guidance from a registered dietitian — it's restrictive and nutritionally challenging to do properly.

### Soluble Fiber
For IBS-C, **soluble fiber** (psyllium husk, oats, flaxseed) can significantly improve symptoms by adding bulk and drawing water into the stool. Insoluble fiber (wheat bran) may actually worsen symptoms in some people with IBS.

### Gluten-Free Diet
Some people with IBS show improvement on a gluten-free diet even without celiac disease — a condition called non-celiac gluten sensitivity. It's worth discussing with your doctor if you suspect gluten is a trigger.

---

## 2. Gut-Directed Psychological Therapies

The gut-brain connection is real, and psychological therapies targeting this connection have some of the strongest evidence in IBS treatment.

### Gut-Directed Cognitive Behavioral Therapy (CBT)
CBT for IBS teaches you to recognize and change thought patterns and behaviors that worsen your symptoms. Multiple clinical trials show **50-60% improvement** in IBS symptoms with CBT — comparable to medication.

### Gut-Directed Hypnotherapy
This is one of the most underrated treatments in IBS. In gut-directed hypnotherapy, a therapist uses guided hypnosis to modulate gut-brain signaling. Studies show **70-80% of people experience significant relief**, and improvements often last years after treatment ends.

### Mindfulness-Based Stress Reduction (MBSR)
Stress and anxiety are major IBS triggers. MBSR teaches meditation and body awareness techniques that reduce the gut's stress response. It's particularly helpful for IBS-D.

---

## 3. Medications for IBS

While there's no "cure" medication, several drugs are FDA-approved specifically for IBS:

### For IBS-C:
- **Linaclotide (Linzess)**: Increases fluid secretion in the intestine, improving stool consistency and reducing pain
- **Lubiprostone (Amitiza)**: Works similarly to linaclotide, with strong evidence for IBS-C
- **Plecanatide (Trulance)**: Another option in the same class

### For IBS-D:
- **Eluxadoline (Viberzi)**: Reduces gut contractions and improves diarrhea and pain
- **Rifaximin (Xifaxan)**: A non-absorbable antibiotic that targets gut bacteria; effective for IBS-D especially with bloating
- **Alosetron (Lotronex)**: For severe IBS-D in women only; restricted prescribing due to side effects

### For General IBS:
- **Antispasmodics** (hyoscine, dicyclomine): Help with cramping and pain
- **Low-dose antidepressants** (TCAs, SSRIs): Modulate gut-brain signaling and reduce pain perception, independent of mood effects
- **Peppermint oil (enteric-coated)**: Has good evidence for reducing IBS pain and spasms

---

## 4. Probiotics

The gut microbiome is deeply involved in IBS, and probiotics have shown promise — but the evidence is mixed because different probiotic strains have different effects.

**Strains with the strongest IBS evidence:**
- **Bifidobacterium infantis 35624** — shown to reduce bloating and pain
- **Lactobacillus plantarum 299v** — helps with IBS-D
- **VSL#3** — a multi-strain product with several positive trials

Probiotics are generally safe to try, but look for products with clinically studied strains rather than generic blends.

---

## 5. Exercise and Lifestyle

Regular physical activity is consistently linked to lower IBS symptom severity. Even moderate exercise like walking 30 minutes daily can improve gut motility, reduce stress hormones, and improve quality of life.

**Sleep** is equally important. Poor sleep worsens IBS symptoms, while improving sleep quality can significantly reduce next-day symptom severity.

---

## 6. Tracking and Personalization

Perhaps the most important IBS "treatment" is understanding your own triggers. Food and symptom journals, wearable data, and structured tracking can reveal patterns that would otherwise go unnoticed.

This is exactly what IbisLabs is building — an AI-powered platform that helps you identify your specific IBS triggers, track your progress, and personalize your treatment approach.

---

## Working With Your Doctor

The best IBS treatment is a personalized combination of approaches. What works depends on your IBS subtype, your triggers, your lifestyle, and your preferences.

Start by identifying your IBS type — whether IBS-C, IBS-D, IBS-M, or IBS-U — because this will guide every treatment decision. If you're unsure of your subtype, our free quiz can help.
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
