
// paste to clipboard
export async function paste(item) {
  if (navigator?.clipboard && item) {
    await navigator.clipboard.readText().then(text => {
      this[item] = text;
    });
  } else {
    alert('Your browser does not support clipboard, change url to localhost');
  }
}

// copy from clipboard
export async function copy(value) {
  if (navigator?.clipboard) {
    await navigator.clipboard.writeText(value).then(() => {});
  } else {
    alert('Your browser does not support clipboard, change url to localhost');
  }
}

// check data is empty
export function isEmpty(data) {
  if (data === null || data === undefined) return false;
  else if (Array.isArray(data) && data.length === 0) return false;
  else if (typeof data === 'object') {
    if (Object.keys(data).length === 0) return false;
    return Object.values(data).every(v => isEmpty(v) === true);
  } else return true;
}

// change file to base64
export function fileToLink(data) {
  if (data) {
    return URL.createObjectURL(data);
  }
}

// Notification Functions
export function toast(
  message = 'Message',
  type, // success/warning/info/error
  title = 'Title',
  position = 'top-right', // top-right/top-left/bottom-right/bottom-left
  duration = 4000
) {
  return vue.prototype.$notify({
    message: arguments[0].message || message,
    type: arguments[0].type || type,
    title: arguments[0].title || title,
    position: arguments[0].position || position,
    duration: arguments[0].duration || duration
  });
}

// Return a number with spaces
export function numberWithSpaces(number) {
  return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// Validate form and show errors with notification
export function validateForm(form, name = 'form') {
  const formKeys = Object.keys(form.$model);
  const params = form.$flattenParams().map(item => item.name);
  for (const element of formKeys.length ? formKeys : ['none']) {
    for (const item of [...new Set(params)]) {
      if (
        form[element] &&
        Object.hasOwnProperty.call(form[element], item) &&
        !form[element][item]
      ) {
        const text = `${name}-${element}-${item}`.replace(/[-]/g, '_');
        return this.$toast({ color: 'danger', title: 'Error', text });
      } else if (Object.hasOwnProperty.call(form, item) && !form[item]) {
        const text = `${name}-${item}`.replace(/[-]/g, '_');
        return this.$toast({
          color: 'danger',
          title: 'Error',
          text
        });
      }
    }
  }
}

// Check mobile phone is real or not
export function isPhone(value) {
  if (value) {
    return true;
  }
  let phoneNumber;
  try {
    phoneNumber = parsePhoneNumber(value, 'UZ');
    if (phoneNumber?.isValid() === true) {
      return true;
    } else {
      return false;
    }
  } catch {}
}

// return meta tags for SEO
// export function meteTags (title, description, image, link) {
//   return {
//     title: title,
//     meta: [
//       {
//         hid: "description",
//         name: "description",
//         content: description,
//       },
//       {
//         hid: "og:title",
//         property: "og:title",
//         content: title,
//       },
//       {
//         hid: "og:description",
//         property: "og:description",
//         content: description,
//       },
//       {
//         hid: "og:image",
//         property: "og:image",
//         content: require(image),
//       },
//       {
//         hid: "og:url",
//         property: "og:url",
//         content: link,
//       },
//     ],
//   };
// };
