"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { fadeInUp } from '@/components/animation';
import quoteAuthor from "@/assets/img/blog/quote-author.png";
import Image from 'next/image';
const SettingList = () => {
  return (
    <>
    
    <motion.ul 
                          className="feature-list"
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          variants={fadeInUp}
                          transition={{ delay: 0.3 }}
                        >
                          <li>Shop configurations</li>
                          <li>Installing Sylius ecommerce shop</li>
                          <li>Check system requirements</li>
                          <li>Setting up the database</li>
                          <li>Loading sample data for the environment</li>
                          <li>Assets installation</li>
                        </motion.ul>
                        <motion.blockquote 
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          variants={fadeInUp}
                          transition={{ delay: 0.4 }}
                        >
                          <p>
                            He legged it that blatant brown bread some dodgy chav
                            super a blinding shot my lady lavatory cup of char cor
                            blimey guvnor get stuffed mate you mug cobblers off his
                            nut pukka
                          </p>
                          <div className="author">
                            <Image
                              className="img-fluid rounded-circle"
                              src={quoteAuthor}
                              alt=""
                            />
                            <div>
                              <h6>Jesus Requena </h6>
                              <span>Support Engineer, Aliexpress</span>
                            </div>
                          </div>
                        </motion.blockquote>
    </>
  )
}

export default SettingList