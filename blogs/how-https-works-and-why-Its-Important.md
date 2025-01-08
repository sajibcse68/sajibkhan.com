---
title: 'How HTTPS Works and Why Its Important?'
date: '2024-12-16'
description: 'Learn how HTTPS protects your online privacy, keeps your messages safe, and ensures you&apos;re connecting with the right websites. Discover why it&apos;s the internet\’s superhero! 🛡️🚀'
categories:
  - web development
  - https
  - learning
---

![How HTTPS Works and Why It's Important?](/images/blogs/how-https-works-and-why-Its-Important.webp "How HTTPS Works and Why It's Important?")

# How HTTPS Works and Why It's Important?

Hi there, internet traveler 🌍! Have you ever sent a message online and wondered if someone might be peeking at it? Imagine sending a secret letter and having someone spy on it—scary, right?

<img src="/images/blogs/http-not-sure.webp" style="display:block; margin:auto;" width="500" height="300" alt="http-not-sure"><br>

Luckily, That’s where HTTPS comes to the rescue 🚀! Let’s discover what HTTPS is and why it’s essential for keeping you safe while browsing the web.

## What Is HTTPS?

HTTPS stands for **HyperText Transfer Protocol Secure**. Think of it as the superhero version of HTTP, the standard way your browser talks to websites. If you spot a little **padlock** in your browser’s address bar, that’s your sign that HTTPS is protecting you 🛡️. HTTPS uses the port 443 by default.

<img src="/images/blogs/https-connection-is-secure.webp" style="display:block; margin:auto;" width="500" height="300" alt="https-connection-is-secure">

## Why Do We Need HTTPS?

There are **three** main reasons why HTTPS is crucial:

1. **Privacy**
2. **Integrity**
3. **Identification**

### 1. Privacy: Guarding Your Secrets

Imagine you’re messaging a friend. If your message isn’t secure, attackers might read it, track behavioral and identification data! No one wants that. With HTTPS, your messages are locked up tight, just like a super-secure box. Only you and your friend can see what's inside 📬.

### 2. Integrity: Keeping Your Message Safe

Imagine sending a text to your friend: "Hey, let's get ice cream!🍦".<br>
But uh-oh! A sneaky hacker grabs your message and changes it to: "Hey, I don't want to hang out! 😠".<br>
Your friend gets the fake message and feels sad 😢. This is called a **man-in-the-middle attack**. Thankfully, HTTPS ensures that your original message remains untouched during transmission.

### 3. Identification: Knowing Who’s Who

Have you ever gotten a message from someone pretending to be your friend, only to find out it's a sneaky hacker? That’s where HTTPS comes in to save the day! It uses **SSL certificates** to protect you.

Think of 'SSL certificates' like identity cards for websites. They show that the site is really who it claims to be. So, when you’re online, you can feel safe knowing you’re talking to your real friend, not an imposter 🕵️‍♂️!

## The Power of Encryption: Keeping Your Secrets Safe

Have you ever wondered how your messages and personal info stay private when you shop online or browse the web? 🌟 Let’s dive into how this works with some fun examples!

### What Is Encryption?

Think of sending a secret note to your friend:

1. You put your note in a special box
2. Lock it with a key
3. Only your friend has the matching key to open it

That's exactly how encryption works online! It keeps your messages safe from others. It’s all about keeping your data private by transforming it into a code that only the right person can decode.

### Two Ways to Lock Your Messages 🗝️

#### Single-Key Method (Symmetric)

- Like using one key for your messages
- Same key locks and unlocks
- Problem: Sharing the key can be risky
  - Example: If you hide the key in your sock, someone might find it! ⚠️

#### Two-Key Method (Asymmetric)

- You have two special keys:
  - **Sharing Key** (public key): Share with anyone
  - **Secret Key** (private key): Keep it to yourself
- How it works:
  - Friends use your sharing key (_public key_) to lock messages
  - Only your secret key (_private key_) can unlock them
  - Super safe! 🛡️

So, now If your friend wants to send you a secure message, they lock (encode) the message with your public key. Only you can unlock it using your private key. No spy can break in! 🔑

### How Websites Keep You Safe 🌐

When you see a padlock (🔒) in your browser, it means the website is using encryption to keep your data safe. Here’s how it all comes together:

1. **The website gives you its public key**. This is like saying, “Here’s my safe lock; go ahead and use it!”
2. **You use that public key to send a secret password**. This password lets both you and the website talk privately.
3. **From that point on, all your data is locked up safe** and sound.

_Actually browser and website go through a process called an SSL/TLS handshake. By **combining both symmetric and asymmetric keys**, your browser and the website can exchange information securely in a flash! ✨_

## The Handshake of the Internet: Keeping You Safe Online

Every time you visit a website and see that little padlock icon, think of your browser giving a friendly handshake to the site, saying, “Don’t worry, we’re safe here!” 🤝 Let’s explore this digital handshake and see how it keeps your information secure.

## What’s a Handshake?

Imagine you meet someone new and want to share secrets (like passwords). You need to trust them completely! When your browser connects to a secure site they perform a digital handshake. This is just a fancy way of agreeing on how to keep their conversation private.

### The Handshake Steps:

1. **Left Clap (Client Hello)**: Browser sends a message to website (server) with a list of security options (e.g. I know A, B, C, D cipher suites).
2. **Right Clap (Server Hello)**: Website (server) replies with its choice of security method (e.g. ok, let’s use ‘C’ cipher suite) and shares its ID (like a driver’s license) to prove it's real.
3. **Vertical Shaka (Client Key Exchange)**: Your browser does two important things:

   - **Checks the Website's ID**: Like checking someone's driver's license, your browser makes sure the website's certificate is real by checking it is issued by a trusted certificate authority (like GoDaddy, DigiCert, etc.).

   - **Creates and Sends a Special Key (Session Key)**:
     1. Your browser creates a special pre-master key (we call it a "session key") 🔑
     2. It locks this key using the **website's public key** (like putting it in a box only the website can open)
     3. Then sends it to the website

4. **Shaka Horizontal Rotation (Change Cipher Spec)**: They agree on a secret code for all future messages. At this point browser (client) and website (server) both have common key known as **session key**.

And just like that, all the communication is now secured!

## Why Does This Matter to You?

When you’re browsing, you want to be sure your personal info is safe. That’s why you should:

- Always look for the padlock symbol—it means you’re in a safe space.
- Use HTTPS websites for secure connections. The “S” stands for _secure_—stick with it!
- Keep your browser updated to enjoy the latest security features.

# Wrapping It Up

And that’s it! HTTPS is your trusty sidekick on the web, ensuring your online adventures are safe and sound. It protects your privacy and keeps your messages intact. Next time you browse, remember the power of that little padlock, and enjoy your time online! 🏄‍♂️
