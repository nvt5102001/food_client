import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Avatar,
  Paper,
  Fade,
  Zoom,
  Fab,
} from "@mui/material";
import { Icon } from "../assets/icon";
import logo from "../assets/images/logo.png";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Xin chào! Tôi là trợ lý ảo của Tư Hường Food. Tôi có thể giúp gì cho bạn?",
      isBot: true,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: "Cảm ơn bạn đã quan tâm. Đội ngũ Tư Hường sẽ phản hồi bạn sớm nhất có thể hoặc bạn có thể gọi hotline: 0123 456 789 để được hỗ trợ nhanh nhất!",
        isBot: true,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <Box sx={{ position: "fixed", bottom: 40, right: 30, zIndex: 1000 }}>
      {/* Floating Button */}
      <Zoom in={!isOpen}>
        <Fab
          className="honey-gradient"
          aria-label="chat"
          onClick={() => setIsOpen(true)}
          sx={{
            color: "white",
            width: 65,
            height: 65,
            boxShadow: "0 8px 25px rgba(120, 89, 0, 0.3)",
            "&:hover": { transform: "scale(1.1)" },
            transition: "all 0.3s ease",
          }}
        >
          <Icon.ChatIcon sx={{ fontSize: 30 }} />
        </Fab>
      </Zoom>

      {/* Chat Window */}
      <Fade in={isOpen}>
        <Paper
          elevation={10}
          sx={{
            position: "absolute",
            bottom: 80,
            right: 0,
            width: { xs: "320px", sm: "380px" },
            height: "500px",
            borderRadius: 6,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            backdropFilter: "blur(20px)",
            bgcolor: "rgba(255, 255, 255, 0.9)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            transformOrigin: "bottom right",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: "primary.main",
              color: "white",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar
                src={logo}
                sx={{ width: 40, height: 40, bgcolor: "white", p: 0.5 }}
              />
              <Box>
                <Typography variant="subtitle1" fontWeight={700}>
                  Tư Hường Food
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  Trực tuyến
                </Typography>
              </Box>
            </Box>
            <IconButton
              size="small"
              onClick={() => setIsOpen(false)}
              sx={{ color: "white" }}
            >
              <Icon.CloseIcon />
            </IconButton>
          </Box>

          {/* Messages Listing */}
          <Box
            sx={{
              flexGrow: 1,
              p: 2,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              bgcolor: "rgba(0,0,0,0.02)",
            }}
          >
            {messages.map((msg) => (
              <Box
                key={msg.id}
                sx={{
                  alignSelf: msg.isBot ? "flex-start" : "flex-end",
                  maxWidth: "80%",
                }}
              >
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: msg.isBot
                      ? "20px 20px 20px 5px"
                      : "20px 20px 5px 20px",
                    bgcolor: msg.isBot ? "white" : "tertiary.main",
                    color: msg.isBot ? "text.primary" : "white",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  }}
                >
                  <Typography variant="body2">{msg.text}</Typography>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    mt: 0.5,
                    textAlign: msg.isBot ? "left" : "right",
                    color: "text.secondary",
                    fontSize: "0.7rem",
                  }}
                >
                  {msg.time}
                </Typography>
              </Box>
            ))}
            <div ref={messagesEndRef} />
          </Box>

          {/* Input Area */}
          <Box
            sx={{
              p: 2,
              bgcolor: "white",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <TextField
              fullWidth
              variant="standard"
              placeholder="Nhập tin nhắn..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              InputProps={{ disableUnderline: true }}
              sx={{
                bgcolor: "rgba(0,0,0,0.04)",
                px: 2,
                py: 1,
                borderRadius: 4,
              }}
            />
            <IconButton
              onClick={handleSend}
              sx={{
                color: "primary.main",
                "&:hover": { bgcolor: "primary.light", color: "white" },
              }}
            >
              <Icon.SendIcon />
            </IconButton>
          </Box>
        </Paper>
      </Fade>
    </Box>
  );
};
