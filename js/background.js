(function () {
  let element;

  chrome.contextMenus.create({
    "id": "hanseatic-content",
    "title": "Generate random...",
    "contexts": ["editable"],
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content",
    "title": "Title",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.title"),
  });

  chrome.contextMenus.create({
    "id": "hanseatic-content-person",
    "parentId": "hanseatic-content",
    "title": "Person Details",
    "contexts": ["editable"],
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content-person",
    "title": "First Name",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.first"),
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content-person",
    "title": "Last Name",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.last"),
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content-person",
    "title": "Full Name",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.name"),
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content-person",
    "title": "Name prefix",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.prefix"),
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content-person",
    "title": "Name suffix",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.suffix"),
  })

  chrome.contextMenus.create({
    "parentId": "hanseatic-content-person",
    "title": "Birthday",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.birthday"),
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content-person",
    "title": "Gender",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.gender"),
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content",
    "title": "Telephone",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.phone"),
  });

  chrome.contextMenus.create({
    "id": "hanseatic-content-number",
    "parentId": "hanseatic-content",
    "title": "Number",
    "contexts": ["editable"],
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content-number",
    "title": "Integer",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.integer"),
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content-number",
    "title": "Natural",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.natural"),
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content-number",
    "title": "Floating",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.floating"),
  });

  chrome.contextMenus.create({
    "id": "hanseatic-content-address",
    "parentId": "hanseatic-content",
    "title": "Address",
    "contexts": ["editable"],
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content-address",
    "title": "Street",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.street"),
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content-address",
    "title": "City",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.city"),
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content-address",
    "title": "Zip",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.zip"),
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content-address",
    "title": "Postal",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.postal"),
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content-address",
    "title": "Country",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.country"),
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content",
    "title": "URI",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.url"),
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content",
    "title": "E-Mail",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.email"),
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content",
    "title": "IP Address",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.ip"),
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content",
    "title": "Twitter Name",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.twitter"),
  });

  chrome.contextMenus.create({
    "parentId": "hanseatic-content",
    "title": "Hashtag",
    "contexts": ["editable"],
    "onclick": (info, tab) => chrome.tabs.sendMessage(tab.id, "generate.hashtag"),
  });
}());
