# VPK file search
 Searchs, in a given path, which VPK files contains a given file. Useful when you want to know which add-on is causing a consistency error.

## Getting Started

### Prerequisites

 - Node.js
 - Python
 - [Python's VPK package](https://github.com/ValvePython/vpk). `pip install vpk`

### Installing

Clone the repository

```
git clone https://github.com/LuisMayo/TelegramConversationGames.git
```
Launch the app
`node index.js "THING-TO-LOOK-FOR"`
For example
`node index.js "weapons/sniper-military.txt"`

## Using node to call python to perform extremely easy operations, why?
Yes. This is terrible, a Python script which could have do the same wouldn't be hard at all to write. And yet I have a Node script which invokes a python command-line package. This includes a rutime dependency (node) that shouldn't be neccesary.
Why, do you ask? Well, I wanted to play L4D2 but some VPK was preventing me from joining servers. So I quickly typed this script to find the offender file. I don't know python (or I didn't when I wrote this), so it was way faster for me to type 13 JS lines than trying to do it in Python and I wanted to play ASAP. Also I already had Node installed.

Why do I share it then? Because I already typed it, why shouldn't I?

## Contributing
Since this is a tiny project we don't have strict rules about contributions. Just open a Pull Request to fix any of the project issues or any improvement you have percieved on your own. Any contributions which improve or fix the project will be accepted as long as they don't deviate too much from the project objectives. If you have doubts about whether the PR would be accepted or not you can open an issue before coding to ask for my opinion
