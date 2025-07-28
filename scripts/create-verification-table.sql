-- Create user_verifications table for Discord bot verification
CREATE TABLE IF NOT EXISTS user_verifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  discord_user_id TEXT NOT NULL,
  verification_token TEXT NOT NULL,
  ip_address TEXT NOT NULL,
  user_agent TEXT,
  verified_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'verified',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_verifications_discord_user_id 
ON user_verifications(discord_user_id);

CREATE INDEX IF NOT EXISTS idx_user_verifications_ip_address 
ON user_verifications(ip_address);

CREATE INDEX IF NOT EXISTS idx_user_verifications_verified_at 
ON user_verifications(verified_at);

-- Add RLS (Row Level Security) policies
ALTER TABLE user_verifications ENABLE ROW LEVEL SECURITY;

-- Policy for inserting new verifications (public access for bot)
CREATE POLICY "Allow public inserts" ON user_verifications
  FOR INSERT WITH CHECK (true);

-- Policy for reading verifications (admin only - modify as needed)
CREATE POLICY "Allow admin read" ON user_verifications
  FOR SELECT USING (false); -- Modify this based on your admin setup

-- Add some constraints
ALTER TABLE user_verifications 
ADD CONSTRAINT check_status 
CHECK (status IN ('verified', 'pending', 'failed', 'revoked'));

-- Add comment for documentation
COMMENT ON TABLE user_verifications IS 'Stores Discord bot verification data including user IP addresses';
