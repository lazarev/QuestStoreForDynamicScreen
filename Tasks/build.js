#!/usr/bin/env node

var x = {
    {
        "title": "Tasks list example",
        "content": [
            {
                "type": "spacer",
                "height": 18
            },
            require("./action_page_unpause.js"),
            {
                "type": "cell",
                "items": [
                    {
                        "type": "hbox",
                        "items": [
                            {
                                "style": "text_default",
                                "text": "Пройти опрос об уровне физического стресса",
                                "type": "text",
                                "margin": {
                                    "left": 18,
                                    "top": 18,
                                    "right": 10,
                                    "bottom": 0
                                },
                                "weight": 1
                            },
                            {
                                "image": {
                                    "height": 32,
                                    "url": "https://ucarecdn.com/cf23f44d-e8f7-4e06-9dd9-d2117fbd13cb/",
                                    "width": 32,
                                    "uploadcare_id": "cf23f44d-e8f7-4e06-9dd9-d2117fbd13cb"
                                },
                                "type": "image",
                                "margin": {
                                    "left": 18,
                                    "top": 18,
                                    "right": 10,
                                    "bottom": 0
                                }
                            }
                        ]
                    },
                    {
                        "style": "text_default_grey",
                        "text": "Видео о влиянии стресса",
                        "type": "text",
                        "margin": {
                            "left": 18,
                            "top": 18,
                            "right": 18,
                            "bottom": 0
                        }
                    },
                    {
                        "type": "hbox",
                        "items": [
                            {
                                "style": "button_grey_cell",
                                "text": "Close",
                                "type": "button",
                                "ratio": 50,
                                "margin": {
                                    "left": 18,
                                    "top": 18,
                                    "right": 0,
                                    "bottom": 18
                                }
                            }, 
                            {
                                "type": "spacer",
                                "wieght": 1
                            }
                        ]
                    }
                ],
                "action": {
                    "method": "POST",
                    "progress_text": "Активация программы..",
                    "success_text": "Программа активирована",
                    "url": "https://stage-api.welltory.com/api/v2/todo/v4/user/data/quests/1/unpause/",
                    "type": "request"
                }
            },
            {
                "type": "cell",
                "items": [
                    {
                        "type": "hbox",
                        "items": [
                            {
                                "style": "text_default",
                                "text": "Работать не более 6 ч за компьютером в течение дня",
                                "type": "text",
                                "margin": {
                                    "left": 18,
                                    "top": 18,
                                    "right": 10,
                                    "bottom": 0
                                },
                                "weight": 1
                            },
                            {
                                "image": {
                                    "height": 32,
                                    "url": "https://ucarecdn.com/cf23f44d-e8f7-4e06-9dd9-d2117fbd13cb/",
                                    "width": 32,
                                    "uploadcare_id": "cf23f44d-e8f7-4e06-9dd9-d2117fbd13cb"
                                },
                                "type": "image",
                                "margin": {
                                    "left": 18,
                                    "top": 18,
                                    "right": 10,
                                    "bottom": 0
                                }
                            }
                        ]
                    },
                    {
                        "style": "text_default",
                        "text": "Попробуйте работать меньше",
                        "type": "text",
                        "margin": {
                            "left": 18,
                            "top": 18,
                            "right": 18,
                            "bottom": 0
                        }
                    },
                    {
                        "type": "hbox",
                        "items": [
                            {
                                "style": "button_grey_bordered_cell",
                                "text": "Начать",
                                "type": "button",
                                "ratio": 50,
                                "icon": {
                                    "height": 14,
                                    "url": "https://ucarecdn.com/b6508341-35f6-4671-81ba-93bfe7010d19/",
                                    "width": 14,
                                    "uploadcare_id": "b6508341-35f6-4671-81ba-93bfe7010d19"
                                },
                                "margin": {
                                    "left": 18,
                                    "top": 18,
                                    "right": 0,
                                    "bottom": 18
                                }
                            }, 
                            {
                                "type": "spacer",
                                "wieght": 1
                            }
                        ]
                    }
                ],
                "action": {
                    "method": "POST",
                    "progress_text": "Активация программы..",
                    "success_text": "Программа активирована",
                    "url": "https://stage-api.welltory.com/api/v2/todo/v4/user/data/quests/1/unpause/",
                    "type": "request"
                }
            },
            {
                "type": "cell",
                "items": [
                    {
                        "type": "hbox",
                        "items": [
                            {
                                "style": "text_default",
                                "text": "Пройти 30000 шагов",
                                "type": "text",
                                "margin": {
                                    "left": 18,
                                    "top": 18,
                                    "right": 10,
                                    "bottom": 0
                                },
                                "weight": 1
                            },
                            {
                                "image": {
                                    "height": 32,
                                    "url": "https://ucarecdn.com/cf23f44d-e8f7-4e06-9dd9-d2117fbd13cb/",
                                    "width": 32,
                                    "uploadcare_id": "cf23f44d-e8f7-4e06-9dd9-d2117fbd13cb"
                                },
                                "type": "image",
                                "margin": {
                                    "left": 18,
                                    "top": 18,
                                    "right": 10,
                                    "bottom": 0
                                }
                            }
                        ]
                    },
                    {
                        "type": "hbox",
                        "items": [
                            {
                                "image": {
                                    "height": 24,
                                    "url": "https://ucarecdn.com/cf23f44d-e8f7-4e06-9dd9-d2117fbd13cb/",
                                    "width": 24,
                                    "uploadcare_id": "cf23f44d-e8f7-4e06-9dd9-d2117fbd13cb"
                                },
                                "type": "image",
                                "margin": {
                                    "left": 18,
                                    "top": 18,
                                    "right": 10,
                                    "bottom": 18
                                }
                            },
                            {
                                "style": "text_default",
                                "text": "Выполняется",
                                "type": "text",
                                "margin": {
                                    "left": 18,
                                    "top": 18,
                                    "right": 10,
                                    "bottom": 18
                                },
                                "weight": 1
                            }
                        ]
                    }
                ],
                "action": {
                    "method": "POST",
                    "progress_text": "Активация программы..",
                    "success_text": "Программа активирована",
                    "url": "https://stage-api.welltory.com/api/v2/todo/v4/user/data/quests/1/unpause/",
                    "type": "request"
                }
            },
            {
                "type": "spacer",
                "height": 18
            }
        ]
    }
}

console.log(JSON.stringify(x, null, 2));