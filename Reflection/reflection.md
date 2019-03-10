# Reflection

This exercise relies on Wikipedia to turn a simple text table into "linked data". In the following exercies, you'll be asked to think about where this model can and cannot be replicated. You will probably want to use markdown source blocks and tables in some of your ansers.  You can create a table with vertical pipes:

```markdown
Header 1 | Header 2
---------+---------
Content cell 1 | Content Cell 2
Content Row 2 | Content Row 2
```

The block above uses fenced code blocks to show the table syntax; you might use code blocks for other purposes in this reflection, as well. 

## Question 1 (150 words)
#### Our underlying dataset was a list of political leaders. Describe another possible dataset which could use Wikipedia in the same way. Give an example of a possible Javascript object description of one record in the dataset, using the Javscript objects from Parts 1 and 3 as a starting point.

Instead of using people, another possible dataset is for events, such a timeline showing the dissolution of the Soviet Union. Since a table organises data as if it were in a list, the table would be in chronological order of the events. The table would look something like this:

```
Events leading up to the Dissolution of the Soviet Union (1985-1991)
Date       |                       Event                           | Description
-----------+-------------------------------------------------------+-------------
March 1985 | Appointment of Mikhail Gorbachev as General Secretary | Description
```

An example of a possible Javascript object description would be the appointment of Mikhail Gorbachev as General Secretary of the Soviet Union in March 1985:

After the death of Konstantin Chernenko, Gorbachev was elected as General Secretary by the Politburo. At the time of his appointment, he was at the age of 54, the youngest member of the Politburo. Among the Soviet public, there was a general relief across the Soviet Union that their General Secretary was not an elderly and ail, and was therefore fit to serve his position. As General Secretary, his main goal was revive the Soviet economy, which required changing the political and social structures of the Soviet Union.

## Question 2 (150 words)
#### Now describe another dataset for which Wikipedia would **not** be as good a resource. What does this tell you about the limitations of Wikipedia? WHat kind of work would you need to do to make useful links for this dataset?

As Wikipedia can be edited by anyone and therefore content within Wikipedia pages are constantly being altered, it would not be appropriate to use Wikipedia for recent events, such as a table set of events that had occurred a few hours ago. Especially if these events are controversial, not enough time may have passed for writers to truly let the information sink in, and the information that they give may be biased towards a certain opinion. This issue is extremely alarming especially because Wikipedia is an Encyclopedia, which provides information, not opinions on certain topics. Moreover, the fully story behind an event may not have been uncovered, which causes a problem because even more biases can arise. This may cause writers to accidentally make up a story on why an event happened.

Instead of using Wikipedia sources to provide information on recently-occurred events, links to newspaper or magazine articles may be used until enough information on the event has been provided. Although articles also provide opinions, this will appear much more clearer to readers that the things they are reading are not unbiased facts because most newspaper and magazine companies usually provide the name of the writer of an article, as well as a link to their background. Moreover, instead of using just one link, it would be better to provide several links to different articles written by different writers, just so that readers can form their own opinions instead of reading from just one perspective.

## Question 3 (150 words)
#### Finally, what problems do you see with this tabular format? What are its limitations, and what do they suggest more broadly about the limitations of data-based historical/humanistic inquiry?

Although you can read details more closely, this tabular format is limited because it makes it harder to picture links between the different pieces of data, and is harder to think of the bigger picture and the main issue at hand. Referring back to the example of the dissolution of the Soviet Union, it would be harder to visualise the main cause of the state’s dissolution because events are chronologically ordered in the table. While it is possible to rearrange the events so that the most significant one appears at the top, it is also messy and can become hard to read as the events are no longer ordered.

The different methods in visualising information suggests to us that some methods of presenting information are better than others, and it becomes clear to us that when we do use data for historical and humanistic inquiry, we need to present information in a way that best fits our argument, because changing the way we present something can also change the way information is interpreted.