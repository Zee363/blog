const express = require("express");
const app = express();
app.use(express.json());
const PORT = 5000;

const blog = [
  {
    id: 0,
    pageTitle: "Home",
    category: "Style",
    posts: [
      {
        id: 0,
        title: "An Ode to the Feminine Spirit with Iconography",
        paragraphs: [
          "When it comes to investing into clothing I always aim for a collection of well-thought-out pieces that mix and match effortlessly, making dressing for any occasion and season a breeze.",
          "Mirroring the spirit of winter in the city in my new cooler weather staples from Iconography. The brand was kind enough to have me collaborate with them for their #Iconicwomen which I am so thrilled about. Iconography is more than a women’s wear fashion brand; it’s an ode to the feminine spirit. Blending timeless elegance with the allure of wander, each piece is characterised by classic silhouettes designed in bold patterns, textures and colours. The brand is truly the perfect choice for women seeking to add lasting pieces to their wardrobe that elevate both the everyday and memorable occasions.",
          "The brand kindly gave me the opportunity to pick out pieces I wanted. Here, an edit on how I recently styled them.",
          {
            subTitle: "Look 1",
            content:
              "Elevating my everyday style this winter with the Pallazo trouser and the Roll-neck sleeve detail jumper paired with the Monogram shoulder bag.",
          },
          {
            subTitle: "Look 2",
            content:
              "A play on volume and texture but still keeping it subtle in the Iconography design cardigan and the Co-ord full skirt.",
            paragraphs:
              "If you're looking to shop any of my looks or looking to invest in more from the range, visit site 'Bash' and search 'Iconography' to shop yours.",
          },
        ],
        images: ["/", "/", "/", "/", "/"],
      },
    ],
  },

  {
    id: 1,
    pageTitle: "Home",
    category: "Style",
    posts: [
      {
        id: 1,
        title: "Spring Dressing With Poetry",
        paragraphs: [
       "Poetry recently invited me to visit one of their stores to have an experience of their new spring range looks.",
          "I stopped by their Hyde Park store and tried on what was available from the range and the pieces were absolutely stunning. The new season styles ranges from the prettiest prints, textures and silhouettes you can dream of. From short and sweet, flowy and fun prints to a monochrome mood. There's a style for everyone.",
          {
            subTitle: "The Looks",
            content:
              "These looks are available both online and in-store. If you're looking to see these styles in action, visit my Instagram account for more content.",
          },
        ],
        images: ["/", "/", "/", "/", "/"],
      },
    ],
  },

  {
    id: 2,
    pageTitle: "Beauty",
    category: "Skincare",
    title: "Skin Health Is The Future",
    paragraphs: [
      "My beige flag is that I’ll never say no to trying out new skincare products. Especially knowing my skin rarely gets irritated at anything I use. I recently got approached by local brand Eleven2 who is based in Cape Town to try out some products and of course I said yes!",
      "Eleven2 products range are hand-picked ingredients that are gentle enough so as not to irritate the skin, but with effective & healing properties to ensure your skin feels nourished and cared for. Free from harmful synthetics and artificial fragrances, this artisan skincare range is affordable yet boasts a luxurious feel, and remains 100% committed to producing products that won’t harm our bodies, the environment or our oceans.",
      "The products sent to me are suited for my skin type which is normal. Below are the steps in which I’ve been using the range.",
      {
        subTitle: "Step 1",
        content:
          "Radiant Skin Cleansing Powder cleanses and exfoliates without drying the skin, removing dead skin cells. Loaded with Vitamin C, it boosts circulation and helps with collagen production.",
      },
      {
        subTitle: "Step 2",
        content:
          "Niacinamide B3+B5 Brighter Skin, Improved skin texture and it minimizes the appearance of pores. Also regulates oil, helps with hyperpigmentation and minimizes fine lines and wrinkles.",
      },
      {
        subTitle: "Step 3",
        content:
          "Squalane is super hydrating and calming on the skin. It improves skin elasticity and is known to help in reducing the appearance of fine lines and wrinkles. It balances oil production, providing just enough moisture to keep the skin clear and healthy.",
      },
    ],
    images: ["/", "/", "/", "/"],
  },

  {
    id: 3,
    pageTitle: "Beauty",
    category: "Skincare",
    posts: [
      {
        title: "The most used Skin Creamery products in my Beauty Cupboard",
        paragraphs: [
          "There's nothing better than the feeling of supple and healthy skin. I've been working with Skin Creamery for a little over a year now and have been using their products religiously.",
          "The products have been keeping my skin healthy and protected and now that we're in the colder months the products have been working well in taking care of my skin. The product range is honestly great in keeping skin good all year long.",
          "As much as the brand has a good range of options to choose from, I do have my personal favourites from the collection that I quite enjoy.",
          "When it comes to skincare I've been using products from Skin Creamery who I have been working with and had the opportunity to use their products for a little over a year now. It's truly an experience you get when using the products",
          {
            subTitle: "Step 1 - The Oil-Milk Facial Cleanser",
            content:
              "Starting off with the Oil-Milk Facial cleanser which gently nourishes my skin and removes impurities. I love how this cleanser is one I can use both in the mornings and evenings and it doesn’t dry out my skin.",
          },
          {
            subTitle: "Step 2 - Skin Tonic",
            content:
              "After cleansing my skin I apply the Skin Tonic which I've loved and haven't stopped using since receiving it. It's a product I always include in my routine and I love the fresh feeling I get after applying it on my skin.",
          },
          {
            subTitle: "Step 3 - The Everyday Cream All-Purpose Moisturiser",
            content:
              "Such a great all-around moisturiser and versatile enough to use on the face and body which I appreciate. This product is so gentle and soothing on my skin and I love that a little goes a long way. Since introducing it to my skincare regime it has truly kept my face, body and hands moisturised and smooth especially during the cold season.",
          },
          {
            subTitle: "Step 4 - The Balm",
            content:
              "Not only picture perfect but effective too! The Balm is a product I often reach out to when I'm looking to add that extra layer of nourishment and hydration to my skin. A great multi-purpose product too that can be used on the face, areas of the body like your knees, elbows etc and the lips.",
          },
          "Skin Creamery's products all have such great formulation of ingredients that truly work and have been effective on my skin. The products are gentle and super soothing. It truly is an experience you get when using the products.",
        ],
        images: ["/"],
      },

      {
        id: 4,
        pageTitle: "Beauty",
        category: "Skincare",
        title: "Skin Health Is The Future",
        paragraphs: [
          "My beige flag is that I'll never say no to trying out new skincare products. Especially knowing my skin rarely gets irritated at anything I use. I recently got approached by local brand Eleven2 who is based in Cape Town to try out some products and of course I said yes!",
          "Eleven2 products range are hand-picked ingredients that are gentle enough so as not to irritate the skin, but with effective & healing properties to ensure your skin feels nourished and cared for. Free from harmful synthetics and artificial fragrances, this artisan skincare range is affordable yet boasts a luxurious feel, and remains 100% committed to producing products that won't harm our bodies, the environment or our oceans.",
          "The products sent to me are suited for my skin type which is normal. Below are the steps in which I've been using the range.",
          {
            subTitle: "Step 1",
            content:
              "Radiant Skin Cleansing Powder cleanses and exfoliates without drying the skin, removing dead skin cells. Loaded with Vitamin C, it boosts circulation and helps with collagen production.",
          },
          {
            subTitle: "Step 2",
            content:
              "Niacinamide B3+B5 Brighter Skin, Improved skin texture and it minimizes the appearance of pores. Also regulates oil, helps with hyperpigmentation and minimizes fine lines and wrinkles.",
          },
          {
            subTitle: "Step 3",
            content:
              "Squalane is super hydrating and calming on the skin. It improves skin elasticity and is known to help in reducing the appearance of fine lines and wrinkles. It balances oil production, providing just enough moisture to keep the skin clear and healthy.",
          },
        ],
        images: ["/", "/", "/", "/"],
      },
    ],
  },

  {
    id: 5,
    pageTitle: "Beauty",
    category: "Skincare",
    posts: [
      {
        title: "The most used Skin Creamery products in my Beauty Cupboard",
        paragraphs: [
          "There's nothing better than the feeling of supple and healthy skin. I've been working with Skin Creamery for a little over a year now and have been using their products religiously.",
          "The products have been keeping my skin healthy and protected and now that we're in the colder months the products have been working well in taking care of my skin. The product range is honestly great in keeping skin good all year long.",
          "As much as the brand has a good range of options to choose from, I do have my personal favourites from the collection that I quite enjoy.",
          "When it comes to skincare I've been using products from Skin Creamery who I have been working with and had the opportunity to use their products for a little over a year now. It's truly an experience you get when using the products",
          {
            subTitle: "Step 1 - The Oil-Milk Facial Cleanser",
            content:
              "Starting off with the Oil-Milk Facial cleanser which gently nourishes my skin and removes impurities. I love how this cleanser is one I can use both in the mornings and evenings and it doesn’t dry out my skin.",
          },
          {
            subTitle: "Step 2 - Skin Tonic",
            content:
              "After cleansing my skin I apply the Skin Tonic which I've loved and haven't stopped using since receiving it. It's a product I always include in my routine and I love the fresh feeling I get after applying it on my skin.",
          },
          {
            subTitle: "Step 3 - The Everyday Cream All-Purpose Moisturiser",
            content:
              "Such a great all-around moisturiser and versatile enough to use on the face and body which I appreciate. This product is so gentle and soothing on my skin and I love that a little goes a long way. Since introducing it to my skincare regime it has truly kept my face, body and hands moisturised and smooth especially during the cold season.",
          },
          {
            subTitle: "Step 4 - The Balm",
            content:
              "Not only picture perfect but effective too! The Balm is a product I often reach out to when I'm looking to add that extra layer of nourishment and hydration to my skin. A great multi-purpose product too that can be used on the face, areas of the body like your knees, elbows etc and the lips.",
          },
          "Skin Creamery's products all have such great formulation of ingredients that truly work and have been effective on my skin. The products are gentle and super soothing. It truly is an experience you get when using the products.",
        ],
        images: ["/"],
      },

      {
        pageTitle: "Beauty",
        category: "Skincare",
        title: "Skin Health Is The Future",
        paragraphs: [
          "My beige flag is that I'll never say no to trying out new skincare products. Especially knowing my skin rarely gets irritated at anything I use. I recently got approached by local brand Eleven2 who is based in Cape Town to try out some products and of course I said yes!",
          "Eleven2 products range are hand-picked ingredients that are gentle enough so as not to irritate the skin, but with effective & healing properties to ensure your skin feels nourished and cared for. Free from harmful synthetics and artificial fragrances, this artisan skincare range is affordable yet boasts a luxurious feel, and remains 100% committed to producing products that won't harm our bodies, the environment or our oceans.",
          "The products sent to me are suited for my skin type which is normal. Below are the steps in which I've been using the range.",
          {
            subTitle: "Step 1",
            content:
              "Radiant Skin Cleansing Powder cleanses and exfoliates without drying the skin, removing dead skin cells. Loaded with Vitamin C, it boosts circulation and helps with collagen production.",
          },
          {
            subTitle: "Step 2",
            content:
              "Niacinamide B3+B5 Brighter Skin, Improved skin texture and it minimizes the appearance of pores. Also regulates oil, helps with hyperpigmentation and minimizes fine lines and wrinkles.",
          },
          {
            subTitle: "Step 3",
            content:
              "Squalane is super hydrating and calming on the skin. It improves skin elasticity and is known to help in reducing the appearance of fine lines and wrinkles. It balances oil production, providing just enough moisture to keep the skin clear and healthy.",
          },
        ],
        images: ["/", "/", "/", "/"],
      },

      {
        id: 6,
        pageTitle: "Lifestyle",
        category: "Personal",
        title: "The Words You Speak Become The House You Live In",
        paragraphs: [
          "How strange is it? You know yourself more than anyone else, yet you crumble at the words or actions of someone who has not lived a single second of your life. The world is filled with people who think they know you but realizing that no one else's voice but yours and the one who created you matters.",
          "I felt so inspired to put this post together because since entering my 26th year I have come to realize so much about myself and the people around me. There's a bible verse that reads:",
          "Don't let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity. -1 Timothy 4:12",
          "Reading this verse you learn that Paul's advice to Timothy is do not give others pause to think that you being young is a reason to believe you are anything but trustworthy, godly, and responsible. Basically, represent yourself so well that they don’t even have time to think about your age but respect your maturity in the Lord which I love. I resonate so well with this verse in many ways but reflecting in it all from how I conduct myself, how both purely joyful and fantastic existing relationships (and the failed ones) I learn to move in life with so many love for myself and others. When you go into any situation with pure intention and it is not received you learn that the grass is not always greener on the other side. Focusing on your side of the lawn and watering your own BUT watering those who appreciate allows for your energy to refocus on the blessings around you.",
          "I referenced this verse in particular because you also start understanding how personal your relationship is with Christ (your faith) and focusing on the journey together. Be an example to those who truly see the light within you and stop focusing on what does not nurture you. Simple. God is strategic, so great and consistent and will always set the tone so you better understand situations you find yourself in. Remember he is the ultimate love.",
          "I hope somewhere, somehow reading this short post resonates with you to refocus from certain situations and rather focus on you and the blessings your creator continues to give you.",
          "Sending love and light for anyone going through a season of finding their silver lining! YOU GOT THIS!",
        ],
        images: ["/", "/", "/", "/"],
      },

      {
        id: 7,
        pageTitle: "Lifestyle",
        category: "Personal",
        title: "The year of BLOOM",
        paragraphs: [
          "I recently celebrated my birthday and I've decided that in my 26th year I'd like to bloom. I want to grow in the direction of the sun and see myself stretch towards the light. Wrapped in warmth and firmly rooted. Envisioning a woman who is going through the motions of better understanding and loving herself even more. Surrounded by love in all forms. Surrounded by a community of family (chosen or blood) who truly see her, and believe in her. This blessing of life is stepping deep within my bones and I am gracefully journeying with it.",
          "I also write down a few notes that allow me to remember how to get better as a person and allow my faults and mistakes to be a lesson that I sit down with and examine. Throughout 25 I discovered how important it is to get rid of those funky people in your life who are unsupportive, aren't accountable, abusive, jealous, competitive, materialistic, negative, gossips and gaslights. Make room for those who align with your path, goals and values. People you feel safe with. Peole who show you love through actions, not just empty words. People who want to understand who you are instead of projecting what they want to see. I promise you, they exist. Working on my own healing I started meeting such amazing people and attracting such good opportunities and also found myself in healthy, positive spaces. Know how to hold space for good people who will celebrate you, genuinely. Yet, also allow yourself to feed on positivity as strongly as you can so you attract the good.",
          "Here's to 26! I'm still here, not because I'm great or because I deserve to be here, but because God is not done with me. Luke 2:52 🤍 prayer - wholistic growth in wisdom, statue and increase in favour with God.",
          "Sending you all love & light.",
        ],
        images: ["/", "/", "/", "/"],
      },

      {
        id: 8,
        pageTitle: "About",
        title: "About",
        paragraphs: [
          "The Haut Aesthetics was founded in 2017 by Ayanda Adams. The blog is a perfect creation in showcasing all things that the founder stands for including fashion, style, lifestyle, skincare, and beauty. The blog is aimed at empowering, inspiring and sharing through personal surroundings, styles and authenticity.",
          "Featuring personal style, lifestyle topics and the everyday life. It's about choosing clean, minimal (with a hint of colour), timeless, sustainable pieces to get you through each season and challenges the preconceptions of what you can and can't wear.",
          "Ayanda is an influential tastemaker on the web who has collaborated with brands like Esteè Lauder, Woolworths, Poetry, Dissh, Lelive, Goodleaf, Kiko Vitals, Charlotte Rhys, Skin Creamery, Standard Beauty, Swiitch Beauty, Bonheur, Suki Suki Naturals, and more! She is also one of the #IconicWomen for Iconography.",
          {
            subTitle: "Hello",
            content:
              "My name is Ayanda Adams founder of the Haut Aesthetics. Wearing multiple hats; Blogger, Digital Marketer, Brand Ambassador and Creative Director based in Johannesburg, South Africa. The Haut Aesthetics is a platform where I showcase all my interests including fashion, personal styling, beauty, skincare and lifestyle. Join me as I share and uncover all these personal interests with the world.",
          },
        ],
        images: ["/", "/", "/", "/"],
      },
    ],
  },
];

app.get("/api/posts", (req, res) => {
  console.log("GET request to fetch all posts");
  res.send(blog);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
