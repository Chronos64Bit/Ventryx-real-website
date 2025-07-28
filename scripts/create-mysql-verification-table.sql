-- Create verifications table for Discord bot verification system
-- This script is designed for MySQL database

CREATE TABLE IF NOT EXISTS verifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    discord_user_id VARCHAR(20) NOT NULL,
    verification_token VARCHAR(255) NOT NULL,
    ip_address VARCHAR(45) NOT NULL,
    user_agent TEXT,
    referer VARCHAR(500),
    guild_id VARCHAR(20),
    username VARCHAR(32),
    discriminator VARCHAR(4),
    avatar VARCHAR(255),
    verified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('verified', 'pending', 'failed', 'revoked') DEFAULT 'verified',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Indexes for better performance
    INDEX idx_discord_user_id (discord_user_id),
    INDEX idx_ip_address (ip_address),
    INDEX idx_guild_id (guild_id),
    INDEX idx_verified_at (verified_at),
    INDEX idx_status (status)
);

-- Create a table for API usage statistics (optional)
CREATE TABLE IF NOT EXISTS api_usage (
    id INT AUTO_INCREMENT PRIMARY KEY,
    endpoint VARCHAR(100) NOT NULL,
    method VARCHAR(10) NOT NULL,
    ip_address VARCHAR(45) NOT NULL,
    user_agent TEXT,
    response_status INT,
    response_time_ms INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_endpoint (endpoint),
    INDEX idx_ip_address (ip_address),
    INDEX idx_created_at (created_at)
);
